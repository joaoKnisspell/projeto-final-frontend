import { useQuery } from '@tanstack/react-query';
import { CategoriasService } from '../services/categorias/categorias-service';
import { BaseContainer } from '../components/BaseContainer';

export const ReportsPage = () => {
  const { data, isFetching } = useQuery({
    queryKey: ['categorias'],
    queryFn: async () => {
      try {
        const response = await CategoriasService.GetAll();
        return response;
      } catch (error) {
        console.error(error);
      }
    },
    enabled: true,
  });

  return (
    <>
      <BaseContainer>
        <h1>Hello World from Transactions Page!</h1>
      </BaseContainer>
    </>
  );
};
