import { useQuery } from '@tanstack/react-query';
import { TransactionsService } from '../../../../services/transactions/transactions-service';
import { Form, Input, Select } from 'antd';
import Label from '../../../../components/Label';
import { useState } from 'react';

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

  const {
    data: transactions,
    isFetching: isFetchingTransactions,
    isFetched: isFetchedTransactions,
  } = useQuery({
    queryKey: ['transactions-list', { pageInfo }],
    queryFn: getTransactions,
    enabled: true,
  });

  const drawerForm = () => {
    return (
      <>
        <Form className="text-white flex flex-col gap-8 " layout="vertical">
          <Form.Item label={<Label labelName="Tipo" />}>
            <Select className="bg-dark-700" placeholder="Selecione o tipo de transação" />
          </Form.Item>
          <Form.Item label={<Label labelName="Prdutos" />}>
            <Select className="bg-dark-700" placeholder="Selecione um ou mais produtos" />
          </Form.Item>
          <Form.Item label={<Label labelName="Total" />}>
            <Input
              style={{ backgroundColor: '#21222d', outline: 'none' }}
              className="bg-dark-700 h-10 border-0"
              placeholder="Valor total da transação"
            />
          </Form.Item>
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
  };
};
