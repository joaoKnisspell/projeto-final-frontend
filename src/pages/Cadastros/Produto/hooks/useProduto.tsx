import { useMutation, useQuery } from '@tanstack/react-query';
import { ProductsService } from '../../../../services/produtos/produtos-service';
import { useState } from 'react';
import { BaseGetAllCriteria } from '../../../../models/criterias/base-get-all.criteria';
import { ProductRegisterFormCriteria } from '../../../../models/criterias/product-register-form.criteria';
import { toast } from 'react-toastify';
import { ApiProductPostError } from '../../../../@types/errors';

export const useProduto = () => {
  const [pageInfo, setPageInfo] = useState({
    page: 1,
    pageSize: 10,
  });
  const [totalPages, setTotalPages] = useState(0);
  const [isRegisterDrawerOpen, setIsRegisterDrawerOpen] = useState(false);
  const [drawerMode, setDrawerMode] = useState<'view' | 'add' | 'edit'>('view');
  const [currentProductId, setCurrentProductId] = useState<null | number>(null);

  const handlePageAction = (page: number, pageSize: number) => {
    setPageInfo({
      page,
      pageSize,
    });
  };

  const {
    data: products,
    isFetching: isFetchingProducts,
    isFetched: isFetchedProducts,
    refetch: refetchProducts,
  } = useQuery({
    queryKey: ['listagem-produtos', { pageInfo }],
    queryFn: async () => {
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
    },
    enabled: true,
  });

  const {
    data: product,
    isFetching: isFetchingProduct,
    isFetched: isFetchedProduct,
  } = useQuery({
    queryKey: [`product-${currentProductId}`, { currentProductId }],
    queryFn: async () => {
      if (currentProductId) {
        try {
          const { data } = await ProductsService.GetById(currentProductId);
          return data;
        } catch (err) {
          console.error(err);
        }
      }
      return null;
    },
    enabled: !!currentProductId,
  });

  const mutation = useMutation({
    mutationKey: ['product-criteria'],
    mutationFn: async (formData: ProductRegisterFormCriteria) => {
      const formattedValues = {
        nome: formData.nomeProduto,
        valor: Number(formData.valor),
        categoriaId: formData.categoriaId,
      };
      try {
        await ProductsService.Post(formattedValues).then(() => toast.success('Produto registrada com sucesso!'));
        handleCloseModal();
        refetchProducts();
      } catch (err) {
        console.error(err);
        toast.error('Erro ao registrar produto!');
      }
    },
  });

  const handleCloseModal = () => {
    setIsRegisterDrawerOpen(false);
    setCurrentProductId(null);
  };

  const handleOpenModal = (mode: 'view' | 'add' | 'edit') => {
    setDrawerMode(mode);
    setIsRegisterDrawerOpen(true);
  };

  const handleSetCurrentProductId = (transactionId: number) => {
    setCurrentProductId(transactionId);
  };

  const deleteMutation = useMutation({
    mutationKey: ['delete-product'],
    mutationFn: async () => {
      if (currentProductId) {
        await ProductsService.Delete(currentProductId).then(() => {
          toast.success('Produto removido com sucesso.');
          refetchProducts();
        });
      }
    },
    onError: (error: ApiProductPostError) => {
      toast.error(error?.response?.data?.error);
    },
  });

  return {
    totalPages,
    products,
    isFetchingProducts,
    isFetchedProducts,
    mutation,
    isRegisterDrawerOpen,
    product,
    isFetchingProduct,
    isFetchedProduct,
    drawerMode,
    deleteMutation,
    currentProductId,
    handlePageAction,
    handleCloseModal,
    handleOpenModal,
    handleSetCurrentProductId,
  };
};
