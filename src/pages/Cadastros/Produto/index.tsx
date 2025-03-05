import { BaseContainer } from '../../../components/BaseContainer';
import CadastroBaseContainer from '../../../components/CadastroBaseContainer';
import { ProductsTablecolumns } from '../../../utils/tableColumns/products-table-columns';
import { useProduto } from './hooks/useProduto';

export const CadastroProdutoPage = () => {
  const { produtos, isFetchingProdutos } = useProduto();

  return (
    <>
      <BaseContainer>
        <CadastroBaseContainer
          searchText="produto"
          buttonText="Nova Produto"
          title="Listagem de Produtos"
          columns={ProductsTablecolumns}
          data={produtos}
          isFetching={isFetchingProdutos}
        ></CadastroBaseContainer>
      </BaseContainer>
    </>
  );
};
