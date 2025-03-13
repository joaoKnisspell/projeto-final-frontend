import { Input, Button, Table } from 'antd';
import Card from '../../../components/Card/Card';
import { Plus } from 'lucide-react';
import { ToastContainer } from 'react-toastify';
import { BaseContainer } from '../../../components/BaseContainer';
import RegisterDrawer from './registerDrawer';
import { useCategoria } from './hooks/useCategoria';
import { CategoriesTablecolumns } from '../../../utils/tableColumns/categories-table-columns';

export const CadastroCategoriaPage = () => {
  const {
    categorias,
    isFetchingCategorias,
    totalPages,
    isRegisterDrawerOpen,
    mutation,
    handlePageAction,
    handleCloseModal,
    handleOpenModal,
  } = useCategoria();

  const inputStyle = {
    backgroundColor: '#21222d',
    border: 'none',
  };

  return (
    <BaseContainer key="category-register-page">
      <section className="max-w-[983px] w-full flex flex-col gap-4">
        <header className="flex items-center gap-4">
          <div className="w-full">
            <Input style={inputStyle} placeholder={`Pesquisar categoria por nome...`} />
          </div>
          <div>
            <Button onClick={handleOpenModal} style={{ ...inputStyle, color: '#87888c' }}>
              <span>Nova Categoria</span>
              <Plus size={20} />
            </Button>
          </div>
        </header>
        <main className="h-full">
          <Card key="category-register-drawer" title="Listagem de Categorias">
            <Table
              columns={CategoriesTablecolumns}
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
