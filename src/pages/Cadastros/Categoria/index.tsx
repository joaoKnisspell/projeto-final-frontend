import { BaseContainer } from '../../../components/BaseContainer';
import CadastroBaseContainer from '../../../components/CadastroBaseContainer';
import { TransactionTablecolumns } from '../../../utils/TransactionTableColumns';

export const CadastroCategoriaPage = () => {
  return (
    <>
      <BaseContainer>
        <CadastroBaseContainer columns={TransactionTablecolumns}></CadastroBaseContainer>
      </BaseContainer>
    </>
  );
};
