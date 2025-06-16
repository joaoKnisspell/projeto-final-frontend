import { Button, Table, Dropdown, MenuProps, Popconfirm } from 'antd';
import Card from '../../../components/Card/Card';
import { ArrowDown, ArrowUp, EllipsisVertical, Eye, Plus, Trash2 } from 'lucide-react';
import { ToastContainer } from 'react-toastify';
import { BaseContainer } from '../../../components/BaseContainer';
import RegisterDrawer from './registerDrawer';
import { useTransaction } from './hooks/useTransactions';
import { TransactionModel, PedidoProdutoModel } from '../../../models';
import { BaseInputStyle } from '../../../theme/baseInputStyle';
import { ActionTableItem } from '../../../theme/actionTableItem';

export const CadastroTransactionPage = () => {
  const {
    transactions,
    isFetchingTransactions,
    totalPages,
    mutation,
    isRegisterDrawerOpen,
    deleteMutation,
    drawerMode,
    transaction,
    handlePageAction,
    handleOpenModal,
    handleCloseModal,
    handleSetCurrentTransactionId,
  } = useTransaction();

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Button
          onClick={() => {
            handleOpenModal('view');
          }}
          style={ActionTableItem}
        >
          <Eye size={16} /> Visualizar
        </Button>
      ),
    },
    {
      key: '2',
      label: (
        <Popconfirm
          title="Atenção: "
          description="Deseja realmente deletar esta transação?"
          onConfirm={() => deleteMutation.mutate()}
          okText="Sim"
          cancelText="Não"
        >
          <Button style={ActionTableItem}>
            <Trash2 size={16} /> Excluir
          </Button>
        </Popconfirm>
      ),
    },
  ];

  const columns = [
    {
      title: 'Ações',
      dataIndex: 'actions',
      width: 100,
      render: (_: unknown, record: TransactionModel) => (
        <Dropdown trigger={['click']} className="w-full" menu={{ items }} placement="top">
          <button onClick={() => handleSetCurrentTransactionId(record.pedidoId)} className="cursor-pointer">
            <EllipsisVertical size={20} />
          </button>
        </Dropdown>
      ),
    },
    {
      title: 'Data',
      dataIndex: 'dataPedido',
      key: 'dataPedido',
      render: (_: unknown, record: TransactionModel) => (
        <span>{new Date(record?.dataPedido).toLocaleString('pt-BR').toString()}</span>
      ),
    },
    {
      title: 'Valor',
      dataIndex: 'valorTotal',
      key: 'valorTotal',
      render: (_: unknown, record: TransactionModel) => (
        <span className="font-medium">
          {record?.valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </span>
      ),
    },
    {
      title: 'Produtos',
      dataIndex: 'produtos',
      key: 'produtos',
      render: (_: unknown, record: TransactionModel) => (
        <span>
          {record?.pedidoProdutos.length <= 3
            ? record?.pedidoProdutos?.map((product: PedidoProdutoModel) => product.produto.nome).join(', ')
            : record?.pedidoProdutos
                ?.slice(0, 3)
                .map((product: PedidoProdutoModel) => product.produto.nome)
                .join(', ') + ' ...'}
        </span>
      ),
    },
    {
      title: 'Tipo',
      dataIndex: 'tipoPedido',
      key: 'tipoPedido',
      render: (_: unknown, record: TransactionModel) => (
        <span className="font-medium">
          {record?.tipoPedido === 'entrada' ? (
            <span className="flex items-center gap-1 font-normal text-green">
              Entrada
              <ArrowUp size={20} />
            </span>
          ) : (
            <span className="flex items-center gap-1 font-normal text-pink">
              Saída
              <ArrowDown className="text-pink" size={20} />
            </span>
          )}
        </span>
      ),
    },
  ];

  return (
    <>
      <BaseContainer key="transaction-register-page">
        <section className="max-w-[983px] w-full flex flex-col gap-4">
          <header className="flex items-center justify-end gap-4">
            <div>
              <Button onClick={handleOpenModal} style={{ ...BaseInputStyle, color: '#87888c' }}>
                <span>Nova Transação</span>
                <Plus size={20} />
              </Button>
            </div>
          </header>
          <main className="h-full">
            <Card key="transactions-list" title="Listagem de Transações">
              <Table
                columns={columns}
                dataSource={transactions}
                loading={isFetchingTransactions}
                size="middle"
                className="h-full"
                pagination={{
                  showSizeChanger: true,
                  pageSizeOptions: [5, 10],
                  total: totalPages,
                  onChange: (page: number, pageSize: number) => handlePageAction(page, pageSize),
                }}
              />
            </Card>
          </main>
          <RegisterDrawer
            data={transaction}
            mode={drawerMode}
            mutation={mutation}
            isDrawerOpen={isRegisterDrawerOpen}
            handleCloseModal={handleCloseModal}
          />
          <ToastContainer autoClose={3000} theme="dark" />
        </section>
      </BaseContainer>
    </>
  );
};
