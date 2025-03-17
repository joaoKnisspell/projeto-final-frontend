import { Input, Button, Table, MenuProps, Dropdown, Popconfirm } from 'antd';
import Card from '../../../components/Card/Card';
import { EllipsisVertical, Eye, Plus, Trash2 } from 'lucide-react';
import { ToastContainer } from 'react-toastify';
import { BaseContainer } from '../../../components/BaseContainer';
import RegisterDrawer from './registerDrawer';
import { useCategoria } from './hooks/useCategoria';
import { BaseInputStyle } from '../../../theme/baseInputStyle';
import { ActionTableItem } from '../../../theme/actionTableItem';

export const CadastroCategoriaPage = () => {
  const {
    categorias,
    isFetchingCategorias,
    totalPages,
    isRegisterDrawerOpen,
    mutation,
    deleteMutation,
    handlePageAction,
    handleCloseModal,
    handleOpenModal,
    handleSetCurrentCategoryId,
  } = useCategoria();

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Button style={ActionTableItem}>
          <Eye size={16} /> Visualizar
        </Button>
      ),
    },
    {
      key: '2',
      label: (
        <Popconfirm
          title="Atenção: "
          description="Deseja realmente deletar esta categoria?"
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
      render: (_: unknown, record: any) => (
        <Dropdown trigger={['click']} className="w-full" menu={{ items }} placement="top">
          <button onClick={() => handleSetCurrentCategoryId(record.categoriaId)} className="cursor-pointer">
            <EllipsisVertical size={20} />
          </button>
        </Dropdown>
      ),
    },
    {
      title: 'Id',
      dataIndex: 'categoriaId',
      key: 'categoriaId',
      render: (_: unknown, record: any) => (
        <span className="font-medium">{record?.categoriaId ?? 'Não Informado.'}</span>
      ),
    },
    {
      title: 'Categoria',
      dataIndex: 'nome',
      key: 'nome',
      render: (_: unknown, record: any) => <span>{record?.nome ?? 'Não Informado.'}</span>,
    },
  ];

  return (
    <BaseContainer key="category-register-page">
      <section className="max-w-[983px] w-full flex flex-col gap-4">
        <header className="flex items-center gap-4">
          <div className="w-full">
            <Input style={BaseInputStyle} placeholder={`Pesquisar categoria por nome...`} />
          </div>
          <div>
            <Button onClick={handleOpenModal} style={{ ...BaseInputStyle, color: '#87888c' }}>
              <span>Nova Categoria</span>
              <Plus size={20} />
            </Button>
          </div>
        </header>
        <main className="h-full">
          <Card key="category-register-drawer" title="Listagem de Categorias">
            <Table
              columns={columns}
              dataSource={categorias}
              loading={isFetchingCategorias}
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
        <RegisterDrawer mutation={mutation} isDrawerOpen={isRegisterDrawerOpen} handleCloseModal={handleCloseModal} />
        <ToastContainer autoClose={3000} theme="dark" />
      </section>
    </BaseContainer>
  );
};
