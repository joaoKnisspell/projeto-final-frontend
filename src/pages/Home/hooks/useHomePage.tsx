import { useQuery } from '@tanstack/react-query';
import { GerenciamentoService } from '../../../services/gerenciamento/gerenciamento-service';
import { TransactionsService } from '../../../services/transactions/transactions-service';
export default function useHomePage() {
  const { data: summary, isFetching: isFetchingSummary } = useQuery({
    queryKey: ['gerenciamento-resumo'],
    queryFn: async () => {
      try {
        const response = await GerenciamentoService.GetSummary();
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
    enabled: true,
  });

  const {
    data: transactions,
    isFetching: isFetchingTransactions,
    isFetched: isFetchedTransactions,
  } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const { data } = await TransactionsService.GetAll();
      if (data) {
        return data.data;
      }
      return null;
    },
    enabled: true,
  });

  return {
    summary,
    isFetchingSummary,
    transactions,
    isFetchingTransactions,
    isFetchedTransactions,
  };
}
