import { BaseContainer } from '../../../components/BaseContainer';
import { TransactionsCompleteTablecolumns } from '../../../utils/tableColumns/transactions-complete-table-columns';
import { useTransaction } from './hooks/useTransactions';

export const CadastroTransactionPage = () => {
  const { transactions, isFetchingTransactions, totalPages, handlePageAction, mutation } = useTransaction();

  return (
    <>
      <BaseContainer key="transaction-register-page">
        <></>
      </BaseContainer>
    </>
  );
};
