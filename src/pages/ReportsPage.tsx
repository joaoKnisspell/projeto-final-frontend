import { useQuery } from '@tanstack/react-query';
import { CategoriesService } from '../services/categorias/categorias-service';
import { BaseContainer } from '../components/BaseContainer';

export const ReportsPage = () => {
  // const { data, isFetching } = useQuery({
  //   queryKey: ['categorias'],
  //   queryFn: async () => {
  //     try {
  //       const response = await CategoriesService.GetAll();
  //       return response;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   },
  //   enabled: true,
  // });

  return (
    <>
      <BaseContainer key="reports-page">
        <h1>Hello World from Transactions Page!</h1>
      </BaseContainer>
    </>
  );
};
