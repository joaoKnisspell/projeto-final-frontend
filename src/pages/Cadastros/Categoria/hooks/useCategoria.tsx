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
  const [isRegisterDrawerOpen, setIsRegisterDrawerOpen] = useState(false);
  const [currentCategoryId, setCurrentCategoryId] = useState<null | number>(null);

  const {
    data: categorias,
    isFetching: isFetchingCategorias,
    refetch: refetchCategories,
  } = useQuery({
    queryKey: ['listagem-categorias'],
    queryFn: async () => {
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
    },
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
        handleCloseModal();
        refetchCategories();
      } catch (err) {
        console.error(err);
        toast.error('Erro ao registrar categoria!');
      }
    },
  });

  const handlePageAction = (page: number, pageSize: number) => {
    setPageInfo({
      page,
      pageSize,
    });
  };

  const handleCloseModal = () => {
    setIsRegisterDrawerOpen(false);
  };

  const handleOpenModal = () => {
    setIsRegisterDrawerOpen(true);
  };

  const handleSetCurrentCategoryId = (transactionId: number) => {
    setCurrentCategoryId(transactionId);
  };

  const deleteMutation = useMutation({
    mutationKey: ['delete-transaction'],
    mutationFn: async () => {
      if (currentCategoryId) {
        await CategoriesService.Delete(currentCategoryId).then(() => {
          toast.success('Transação removida com sucesso.');
          refetchCategories();
        });
      }
    },
    onError: () => {
      toast.error('Erro ao deletar transação!');
    },
  });

  return {
    totalPages,
    categorias,
    isFetchingCategorias,
    mutation,
    isRegisterDrawerOpen,
    deleteMutation,
    handlePageAction,
    handleCloseModal,
    handleOpenModal,
    handleSetCurrentCategoryId,
  };
};
