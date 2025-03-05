import { useQuery } from '@tanstack/react-query';
import { CategoriasService } from '../../../../services/categorias/categorias-service';

export const useCategoria = () => {
  const getCategorias = async () => {
    try {
      const { data } = await CategoriasService.GetAll();
      if (data) {
        return data.data;
      }
      return null;
    } catch (err) {
      console.error(err);
    }
  };

  const {
    data: categorias,
    isFetching: isFetchingCategorias,
    isFetched: isFetchedCategorias,
  } = useQuery({
    queryKey: ['listagem-categorias'],
    queryFn: getCategorias,
    enabled: true,
  });

  return {
    categorias,
    isFetchingCategorias,
    isFetchedCategorias,
  };
};
