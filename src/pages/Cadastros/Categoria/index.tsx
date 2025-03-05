import { BaseContainer } from '../../../components/BaseContainer';
import CadastroBaseContainer from '../../../components/CadastroBaseContainer';
import { TransactionTablecolumns } from '../../../utils/TransactionTableColumns';

export const CadastroCategoriaPage = () => {
  return (
    <>
      <BaseContainer>
        <CadastroBaseContainer pagina="categoria" columns={TransactionTablecolumns}></CadastroBaseContainer>
      </BaseContainer>
    </>
  );
};
