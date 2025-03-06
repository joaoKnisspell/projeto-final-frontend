import { BaseContainer } from '../../../components/BaseContainer';
import CadastroBaseContainer from '../../../components/CadastroBaseContainer';
import { TransactionsCompleteTablecolumns } from '../../../utils/tableColumns/transactions-complete-table-columns';
import { useTransaction } from './hooks/useTransactions';
import { CadastroBaseContainerModel } from '../../../models';

export const CadastroTransactionPage = () => {
  const { transactions, isFetchingTransactions, drawerForm } = useTransaction();

  const CadastroProps: CadastroBaseContainerModel = {
    searchText: 'transação',
    buttonText: 'Nova Transação',
    title: 'Listagem de Transações',
    columns: TransactionsCompleteTablecolumns,
    data: transactions,
    isFetchingData: isFetchingTransactions,
    drawerTitle: 'Transação',
    drawerForm: drawerForm(),
  };

  return (
    <>
      <BaseContainer>
        <CadastroBaseContainer {...CadastroProps} />
      </BaseContainer>
    </>
  );
};
