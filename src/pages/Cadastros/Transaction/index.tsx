import { BaseContainer } from '../../../components/BaseContainer';
import CadastroBaseContainer from '../../../components/CadastroBaseContainer';
import { TransactionsCompleteTablecolumns } from '../../../utils/tableColumns/transactions-complete-table-columns';
import { useTransaction } from './hooks/useTransactions';

export const CadastroTransactionPage = () => {
  const { transactions, isFetchingTransactions, totalPages, handlePageAction, mutation } = useTransaction();

  return (
    <>
      <BaseContainer>
        <CadastroBaseContainer
          type="transacao"
          searchText="transação"
          buttonText="Nova Transação"
          title="Listagem de Transações"
          columns={TransactionsCompleteTablecolumns}
          data={transactions}
          drawerTitle="Transação"
          totalPages={totalPages}
          pageAction={handlePageAction}
          mutation={mutation}
          isFetchingData={isFetchingTransactions}
        />
      </BaseContainer>
    </>
  );
};
