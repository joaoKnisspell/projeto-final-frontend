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
  const [currentTransactionId, setCurrentTransactionId] = useState<null | number>(null);

  const handlePageAction = (page: number, pageSize: number) => {
    setPageInfo({
      page,
      pageSize,
    });
  };

  const mutation = useMutation({
    mutationKey: ['transaction-post'],
    mutationFn: async (formData: TransactionCriteria) => {
      const criteria = {
        ...formData,
        dataPedido: new Date(),
      };
      try {
        await TransactionsService.Post(criteria).then(() => {
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

  const handleSetCurrentTransactionId = (transactionId: number) => {
    setCurrentTransactionId(transactionId);
  };

  const deleteMutation = useMutation({
    mutationKey: ['delete-transaction'],
    mutationFn: async () => {
      if (currentTransactionId) {
        await TransactionsService.Delete(currentTransactionId).then(() => {
          toast.success('Transação removida com sucesso.');
          refetchTransactions();
        });
      }
    },
    onError: () => {
      toast.error('Erro ao deletar transação!');
    },
  });

  return {
    transactions,
    isFetchingTransactions,
    isFetchedTransactions,
    pageInfo,
    totalPages,
    mutation,
    isRegisterDrawerOpen,
    deleteMutation,
    handlePageAction,
    handleOpenModal,
    handleCloseModal,
    handleSetCurrentTransactionId,
  };
};
