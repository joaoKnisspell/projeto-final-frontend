import { useMutation, useQuery } from '@tanstack/react-query';
import { TransactionsService } from '../../../../services/transactions/transactions-service';
import { useState } from 'react';
import { TransactionCriteria } from '../../../../models/criterias/transaction.criteria';
import { toast } from 'react-toastify';

export const useTransaction = () => {
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

  const mutation = useMutation({
    mutationKey: ['transaction-post'],
    mutationFn: async (formData: TransactionCriteria) => {
      try {
        await TransactionsService.Post(formData).then(() => {
          toast.success('Transação registrada com sucesso!');
          handleCloseModal();
        });
      } catch (err) {
        console.error(err);
        toast.error('Erro ao registrar transação.');
      } finally {
        refetchTransactions();
      }
    },
  });

  const {
    data: transactions,
    isFetching: isFetchingTransactions,
    isFetched: isFetchedTransactions,
    refetch: refetchTransactions,
  } = useQuery({
    queryKey: ['transactions-list', { pageInfo }],
    queryFn: async () => {
      const criteria = {
        page: pageInfo.page,
        pageSize: pageInfo.pageSize,
      };

      try {
        const { data } = await TransactionsService.GetAll(criteria);
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

  const handleCloseModal = () => {
    setIsRegisterDrawerOpen(false);
  };

  const handleOpenModal = () => {
    setIsRegisterDrawerOpen(true);
  };

  return {
    transactions,
    isFetchingTransactions,
    isFetchedTransactions,
    pageInfo,
    totalPages,
    mutation,
    isRegisterDrawerOpen,
    handlePageAction,
    handleOpenModal,
    handleCloseModal,
  };
};
