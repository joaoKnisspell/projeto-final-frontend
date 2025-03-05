import { useQuery } from '@tanstack/react-query';
import { TransactionsService } from '../../../../services/transactions/transactions-service';

export const useTransaction = () => {
  const getTransactions = async () => {
    try {
      const { data } = await TransactionsService.GetAll();
      if (data) {
        return data.data;
      }
      return null;
    } catch (err) {
      console.error(err);
    }
  };

  const {
    data: transactions,
    isFetching: isFetchingTransactions,
    isFetched: isFetchedTransactions,
  } = useQuery({
    queryKey: ['transactions-list'],
    queryFn: getTransactions,
    enabled: true,
  });

  return {
    transactions,
    isFetchingTransactions,
    isFetchedTransactions,
  };
};
