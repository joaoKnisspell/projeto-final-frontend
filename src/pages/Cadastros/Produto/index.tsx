import { Input, Button, Table } from 'antd';
import Card from '../../../components/Card/Card';
import { Plus } from 'lucide-react';
import { ToastContainer } from 'react-toastify';
import { BaseContainer } from '../../../components/BaseContainer';
import { ProductsTablecolumns } from '../../../utils/tableColumns/products-table-columns';
import { useProduto } from './hooks/useProduto';
import RegisterDrawer from './registerDrawer';

export const CadastroProdutoPage = () => {
  const {
    products,
    isFetchingProducts,
    totalPages,
    mutation,
    isRegisterDrawerOpen,
    handlePageAction,
    handleOpenModal,
    handleCloseModal,
  } = useProduto();

  const inputStyle = {
    backgroundColor: '#21222d',
    border: 'none',
  };

  return (
    <>
      <BaseContainer key="product-register-page">
        <section className="max-w-[983px] w-full flex flex-col gap-4">
          <header className="flex items-center gap-4">
            <div className="w-full">
              <Input style={inputStyle} placeholder={`Pesquisar produto por nome...`} />
            </div>
            <div>
              <Button onClick={handleOpenModal} style={{ ...inputStyle, color: '#87888c' }}>
                <span>Novo Produto</span>
                <Plus size={20} />
              </Button>
            </div>
          </header>
          <main className="h-full">
            <Card key="categories-list" title="Listagem de Categorias">
              <Table
                columns={ProductsTablecolumns}
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
          <RegisterDrawer mutation={mutation} isDrawerOpen={isRegisterDrawerOpen} handleCloseModal={handleCloseModal} />
          <ToastContainer autoClose={3000} theme="dark" />
        </section>
      </BaseContainer>
    </>
  );
};
