import { useQuery } from '@tanstack/react-query';

export const useProduto = () => {
  const getProdutos = async () => {
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
    queryFn: getProdutos,
    enabled: true,
  });

  return {
    produtos,
    isFetchingProdutos,
    isFetchedProdutos,
  };
};
