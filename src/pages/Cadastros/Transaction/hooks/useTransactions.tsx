import { useQuery } from '@tanstack/react-query';
import { TransactionsService } from '../../../../services/transactions/transactions-service';
import { Form, Input, Row, Select } from 'antd';
import Label from '../../../../components/Label';

export const useTransaction = () => {
  const getTransactions = async () => {
    try {
      const { data } = await TransactionsService.GetAll();
      if (data) {
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
    queryKey: ['transactions-list'],
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
    drawerForm,
  };
};
