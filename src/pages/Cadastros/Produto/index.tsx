import { Button, Table, MenuProps, Dropdown, Popconfirm } from 'antd';
import Card from '../../../components/Card/Card';
import { EllipsisVertical, Eye, Plus, Trash2 } from 'lucide-react';
import { ToastContainer } from 'react-toastify';
import { BaseContainer } from '../../../components/BaseContainer';
import { useProduto } from './hooks/useProduto';
import RegisterDrawer from './registerDrawer';
import { ProdutoModel } from '../../../models';
import { BaseInputStyle } from '../../../theme/baseInputStyle';
import { ActionTableItem } from '../../../theme/actionTableItem';

export const CadastroProdutoPage = () => {
  const {
    products,
    isFetchingProducts,
    totalPages,
    mutation,
    isRegisterDrawerOpen,
    drawerMode,
    deleteMutation,
    product,
    handlePageAction,
    handleOpenModal,
    handleCloseModal,
    handleSetCurrentProductId,
  } = useProduto();

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
      render: (_: unknown, record: ProdutoModel) => (
        <Dropdown trigger={['click']} className="w-full" menu={{ items }} placement="top">
          <button onClick={() => handleSetCurrentProductId(record.produtoId)} className="cursor-pointer">
            <EllipsisVertical size={20} />
          </button>
        </Dropdown>
      ),
    },
    {
      title: 'Nome',
      dataIndex: 'nome',
      key: 'nome',
      render: (_: unknown, record: ProdutoModel) => (
        <span className="font-medium">{record?.nome ?? 'Não Informado.'}</span>
      ),
    },
    {
      title: 'Categoria',
      dataIndex: 'categoriaId',
      key: 'categoriaId',
      render: (_: unknown, record: ProdutoModel) => <span>{record?.categoria?.nome ?? 'Não Informado.'}</span>,
    },
    {
      title: 'Preço',
      dataIndex: 'valor',
      key: 'valor',
      render: (_: unknown, record: ProdutoModel) => (
        <span>{record?.valor?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) ?? 'Não Informado'}</span>
      ),
    },
  ];

  return (
    <>
      <BaseContainer key="product-register-page">
        <section className="max-w-[983px] w-full flex flex-col gap-4">
          <header className="flex justify-end items-center gap-4">
            <div>
              <Button onClick={() => handleOpenModal('add')} style={{ ...BaseInputStyle, color: '#87888c' }}>
                <span>Novo Produto</span>
                <Plus size={20} />
              </Button>
            </div>
          </header>
          <main className="h-full">
            <Card key="categories-list" title="Listagem de Produtos">
              <Table
                columns={columns}
                dataSource={products}
                loading={isFetchingProducts}
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
            mode={drawerMode}
            mutation={mutation}
            isDrawerOpen={isRegisterDrawerOpen}
            handleCloseModal={handleCloseModal}
            data={product}
          />
          <ToastContainer autoClose={3000} theme="dark" />
        </section>
      </BaseContainer>
    </>
  );
};
