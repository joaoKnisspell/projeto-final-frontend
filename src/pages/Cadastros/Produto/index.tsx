import { BaseContainer } from '../../../components/BaseContainer';
import CadastroBaseContainer from '../../../components/CadastroBaseContainer';
import { ProductsTablecolumns } from '../../../utils/tableColumns/products-table-columns';
import { useProduto } from './hooks/useProduto';

export const CadastroProdutoPage = () => {
  const { produtos, isFetchingProdutos, handlePageAction, totalPages, mutate } = useProduto();

  return (
    <>
      <BaseContainer>
        <CadastroBaseContainer
          type="produto"
          drawerTitle="Novo Produto"
          searchText="produto"
          buttonText="Nova Produto"
          title="Listagem de Produtos"
          columns={ProductsTablecolumns}
          data={produtos}
          isFetchingData={isFetchingProdutos}
          totalPages={totalPages}
          pageAction={handlePageAction}
          mutate={mutate}
        ></CadastroBaseContainer>
      </BaseContainer>
    </>
  );
};
