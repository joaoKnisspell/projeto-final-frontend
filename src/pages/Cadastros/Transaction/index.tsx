import { BaseContainer } from '../../../components/BaseContainer';
import CadastroBaseContainer from '../../../components/CadastroBaseContainer';
import { TransactionsCompleteTablecolumns } from '../../../utils/tableColumns/transactions-complete-table-columns';
import { useTransaction } from './hooks/useTransactions';

export const CadastroTransactionPage = () => {
  const { transactions, isFetchingTransactions } = useTransaction();

  return (
    <>
      <BaseContainer>
        <CadastroBaseContainer
          searchText="transação"
          buttonText="Nova Transação"
          title="Listagem de Transações"
          columns={TransactionsCompleteTablecolumns}
          data={transactions}
          isFetching={isFetchingTransactions}
        ></CadastroBaseContainer>
      </BaseContainer>
    </>
  );
};
