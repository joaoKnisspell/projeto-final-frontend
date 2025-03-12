import { useMutation, useQuery } from '@tanstack/react-query';
import { CategoriesService } from '../../../../services/categorias/categorias-service';
import { useState } from 'react';
import { CategoryCriteria } from '../../../../models/criterias/category.criteria';
import { toast } from 'react-toastify';
import { BaseGetAllCriteria } from '../../../../models/criterias/base-get-all.criteria';

export const useCategoria = () => {
  const [pageInfo, setPageInfo] = useState({
    page: 1,
    pageSize: 10,
  });
  const [totalPages, setTotalPages] = useState(0);

  const getCategorias = async () => {
    const criteria: BaseGetAllCriteria = {
      page: pageInfo.page,
      pageSize: pageInfo.pageSize,
    };
    try {
      const { data } = await CategoriesService.GetAll(criteria);
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
    data: categorias,
    isFetching: isFetchingCategorias,
    isFetched: isFetchedCategorias,
  } = useQuery({
    queryKey: ['listagem-categorias'],
    queryFn: getCategorias,
    enabled: true,
  });

  const mutation = useMutation({
    mutationKey: ['category-post'],
    mutationFn: async (formData: CategoryCriteria) => {
      const formattedPostData = {
        nome: formData.nomeCategoria,
      };
      try {
        await CategoriesService.Post(formattedPostData).then(() => toast.success('Categoria registrada com sucesso!'));
      } catch (err) {
        console.error(err);
      }
    },
  });

  const handlePageAction = (page: number, pageSize: number) => {
    setPageInfo({
      page,
      pageSize,
    });
  };

  return {
    totalPages,
    pageInfo,
    categorias,
    isFetchingCategorias,
    isFetchedCategorias,
    handlePageAction,
    mutation,
  };
};
