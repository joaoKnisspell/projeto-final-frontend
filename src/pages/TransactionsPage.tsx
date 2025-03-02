import { useQuery } from '@tanstack/react-query';
import { BaseContainer } from '../components/BaseContainer';
import { TransacoesService } from '../services/transacoes/transacoes-service';

export const TransactionsPage = () => {
  const { data, isFetching } = useQuery({
    queryKey: ['transacoes'],
    queryFn: async () => {
      try {
        const response = await TransacoesService.GetAll();
        return response;
      } catch (error) {
        console.error(error);
      }
    },
    enabled: true,
  });

  console.log(data);
  console.log(isFetching);

  return (
    <>
      <BaseContainer>
        <h1>Hello World from Transactions Page!</h1>
      </BaseContainer>
    </>
  );
};
