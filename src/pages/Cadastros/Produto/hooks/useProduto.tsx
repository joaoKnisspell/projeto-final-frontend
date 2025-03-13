import { useMutation, useQuery } from '@tanstack/react-query';
import { ProductsService } from '../../../../services/produtos/produtos-service';
import { useState } from 'react';
import { BaseGetAllCriteria } from '../../../../models/criterias/base-get-all.criteria';
import { ProductRegisterFormCriteria } from '../../../../models/criterias/product-register-form.criteria';

export const useProduto = () => {
  const [pageInfo, setPageInfo] = useState({
    page: 1,
    pageSize: 10,
  });
  const [totalPages, setTotalPages] = useState(0);
  const [isRegisterDrawerOpen, setIsRegisterDrawerOpen] = useState(false);

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
    data: products,
    isFetching: isFetchingProducts,
    isFetched: isFetchedProducts,
  } = useQuery({
    queryKey: ['listagem-produtos', { pageInfo }],
    queryFn: getProducts,
    enabled: true,
  });

  const mutation = useMutation({
    // const {mutation} = useMutation({
    mutationKey: ['product-criteria'],
    mutationFn: async (formData: ProductRegisterFormCriteria) => {
      const formattedValues = {
        nome: formData.nomeProduto,
        valor: Number(formData.valor),
        categoriaId: formData.categoriaId,
      };
      // try {
      //   await ProductsService.Post(formattedValues).then(() => {
      //     toast.success('Produto registrado com sucesso!');
      //   });
      // } catch (err) {
      //   console.error(err);
      //   toast.error('Erro ao registrar produto!');
      // }
      await ProductsService.Post(formattedValues);
    },
  });

  const handleCloseModal = () => {
    setIsRegisterDrawerOpen(false);
  };

  const handleOpenModal = () => {
    setIsRegisterDrawerOpen(true);
  };

  return {
    totalPages,
    products,
    isFetchingProducts,
    isFetchedProducts,
    mutation,
    isRegisterDrawerOpen,
    handlePageAction,
    handleCloseModal,
    handleOpenModal,
  };
};
