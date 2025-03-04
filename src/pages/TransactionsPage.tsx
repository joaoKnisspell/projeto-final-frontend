import { useQuery } from '@tanstack/react-query';
import { BaseContainer } from '../components/BaseContainer';
import { PedidosService } from '../services/pedidos/pedidos-service';

export const TransactionsPage = () => {
  const { data, isFetching } = useQuery({
    queryKey: ['pedidos'],
    queryFn: async () => {
      try {
        const response = await PedidosService.GetAll();
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
