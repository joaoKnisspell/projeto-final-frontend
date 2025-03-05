import { BaseContainer } from '../../../components/BaseContainer';
import CadastroBaseContainer from '../../../components/CadastroBaseContainer';
import { CategoriesTablecolumns } from '../../../utils/tableColumns/categories-table-columns';
import { useCategoria } from './hooks/useCategoria';

export const CadastroCategoriaPage = () => {
  const { categorias, isFetchingCategorias } = useCategoria();

  return (
    <>
      <BaseContainer>
        <CadastroBaseContainer
          searchText="categoria"
          buttonText="Nova Categoria"
          title="Listagem de Categorias"
          columns={CategoriesTablecolumns}
          data={categorias}
          isFetching={isFetchingCategorias}
        ></CadastroBaseContainer>
      </BaseContainer>
    </>
  );
};
