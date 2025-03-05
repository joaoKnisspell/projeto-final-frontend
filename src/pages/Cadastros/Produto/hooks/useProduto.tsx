import { useQuery } from '@tanstack/react-query';
import { ProdutosService } from '../../../../services/produtos/produtos-service';

export const useProduto = () => {
  const getProducts = async () => {
    try {
      const { data } = await ProdutosService.GetAll();
      if (data) {
        return data.data;
      }
      return null;
    } catch (err) {
      console.error(err);
    }
  };

  const {
    data: produtos,
    isFetching: isFetchingProdutos,
    isFetched: isFetchedProdutos,
  } = useQuery({
    queryKey: ['listagem-produtos'],
    queryFn: getProducts,
    enabled: true,
  });

  return {
    produtos,
    isFetchingProdutos,
    isFetchedProdutos,
  };
};
