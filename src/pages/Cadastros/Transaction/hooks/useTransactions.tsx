import { useMutation, useQuery } from '@tanstack/react-query';
import { TransactionsService } from '../../../../services/transactions/transactions-service';
import { Button, Form, Input, Row, Select } from 'antd';
import Label from '../../../../components/Label';
import { useState } from 'react';
import { TransactionCriteria } from '../../../../models/criterias/transaction.criteria';
import { toast } from 'react-toastify';

export const useTransaction = () => {
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

  const getTransactions = async () => {
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
  };

  const mutation = useMutation({
    mutationKey: ['transaction-post'],
    mutationFn: async (formData: TransactionCriteria) => {
      try {
        await TransactionsService.Post(formData).then(() => {
          toast.success('Transação registrada com sucesso!');
        });
      } catch (err) {
        console.error(err);
        toast.error('Erro: ' + err);
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
    queryFn: getTransactions,
    enabled: true,
  });

  const drawerForm = () => {
    return (
      <>
        <Form className="text-white flex flex-col gap-8 h-full justify-between" layout="vertical">
          <section>
            <Form.Item label={<Label labelName="Tipo" />}>
              <Select className="bg-dark-700" placeholder="Selecione o tipo de transação" />
            </Form.Item>
            <Form.Item label={<Label labelName="Produtos" />}>
              <Select className="bg-dark-700" placeholder="Selecione um ou mais produtos" />
            </Form.Item>
            <Form.Item label={<Label labelName="Total" />}>
              <Input
                style={{ backgroundColor: '#21222d', outline: 'none' }}
                className="bg-dark-700 h-10 border-0"
                placeholder="Valor total da transação"
              />
            </Form.Item>
          </section>
          <footer className="flex flex-col gap-4">
            <Row>
              <Button
                style={{
                  backgroundColor: 'orange',
                  border: '0px solid transparent',
                  color: '#ffffff',
                  boxShadow: 'none',
                  fontWeight: '500',
                }}
                className="w-full"
              >
                Cancelar
              </Button>
            </Row>
            <Row>
              <Button
                style={{
                  backgroundColor: '#20aef3',
                  border: '0px solid transparent',
                  color: '#ffffff',
                  boxShadow: 'none',
                  fontWeight: '500',
                }}
                className="w-full"
              >
                Salvar
              </Button>
            </Row>
          </footer>
        </Form>
      </>
    );
  };

  return {
    transactions,
    isFetchingTransactions,
    isFetchedTransactions,
    pageInfo,
    totalPages,
    drawerForm,
    handlePageAction,
    mutation,
  };
};
