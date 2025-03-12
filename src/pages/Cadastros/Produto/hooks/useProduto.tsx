import { useMutation, useQuery } from '@tanstack/react-query';
import { ProductsService } from '../../../../services/produtos/produtos-service';
import { useState } from 'react';
import { BaseGetAllCriteria } from '../../../../models/criterias/base-get-all.criteria';

export const useProduto = () => {
  const [pageInfo, setPageInfo] = useState({
    page: 1,
    pageSize: 10,
  });

  const [totalPages, setTotalPages] = useState(0);

  const handlePageAction = (page: number, pageSize: number) => {
    setPageInfo({
      page,
      pageSize,
    });
  };

  const getProducts = async () => {
    const criteria: BaseGetAllCriteria = {
      page: pageInfo.page,
      pageSize: pageInfo.pageSize,
    };
    try {
      const { data } = await ProductsService.GetAll(criteria);
      if (data) {
        setTotalPages(data.total);
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

  const mutation = useMutation({
    mutationKey: ['product-criteria'],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutationFn: async (formData: any) => {
      try {
        await ProductsService.Post(formData);
      } catch (err) {
        console.error(err);
      }
    },
  });

  return {
    totalPages,
    produtos,
    isFetchingProdutos,
    isFetchedProdutos,
    mutation,
    handlePageAction,
  };
};
