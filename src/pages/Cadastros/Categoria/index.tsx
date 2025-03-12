import { BaseContainer } from '../../../components/BaseContainer';
import CadastroBaseContainer from '../../../components/CadastroBaseContainer';
import { CategoriesTablecolumns } from '../../../utils/tableColumns/categories-table-columns';
import { useCategoria } from './hooks/useCategoria';

export const CadastroCategoriaPage = () => {
  const { categorias, isFetchingCategorias, handlePageAction, totalPages, mutation } = useCategoria();

  return (
    <>
      <BaseContainer>
        <CadastroBaseContainer
          type="categoria"
          searchText="categoria"
          buttonText="Nova Categoria"
          title="Listagem de Categorias"
          columns={CategoriesTablecolumns}
          data={categorias}
          isFetchingData={isFetchingCategorias}
          drawerTitle="Nova Categoria"
          pageAction={handlePageAction}
          totalPages={totalPages}
          mutation={mutation}
        ></CadastroBaseContainer>
      </BaseContainer>
    </>
  );
};
