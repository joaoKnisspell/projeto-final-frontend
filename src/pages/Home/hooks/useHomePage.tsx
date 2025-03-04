import { useQuery } from '@tanstack/react-query';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { TransactionModel } from '../../../models';
import { GerenciamentoService } from '../../../services/gerenciamento/gerenciamento-service';
import { PedidosService } from '../../../services/pedidos/pedidos-service';

export default function useHomePage() {
  const { data: summary, isFetching: isFetchingSummary } = useQuery({
    queryKey: ['gerenciamento-resumo'],
    queryFn: async () => {
      try {
        const response = await GerenciamentoService.GetSummary();
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
    enabled: true,
  });

  const {
    data: transactions,
    isFetching: isFetchingTransactions,
    isFetched: isFetchedTransactions,
  } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const { data } = await PedidosService.GetAll();
      if (data) {
        return data.data;
      }
      return null;
    },
    enabled: true,
  });

  const columns = [
    {
      title: 'Data',
      dataIndex: 'dataPedido',
      key: 'dataPedido',
      render: (_: unknown, record: TransactionModel) => (
        <span className="text-xs">{new Date(record?.dataPedido).toLocaleString('pt-BR').toString()}</span>
      ),
    },
    {
      title: 'Valor',
      dataIndex: 'valorTotal',
      key: 'valorTotal',
      render: (_: unknown, record: TransactionModel) => (
        <span className="font-medium">
          {record?.valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </span>
      ),
    },
    {
      title: 'Tipo',
      dataIndex: 'tipoPedido',
      key: 'tipoPedido',
      render: (_: unknown, record: TransactionModel) => (
        <span className="font-medium">
          {record?.tipoPedido === 'entrada' ? (
            <span className="flex items-center gap-1 font-normal text-green">
              Entrada
              <ArrowUp size={20} />
            </span>
          ) : (
            <span className="flex items-center gap-1 font-normal text-pink">
              Saída
              <ArrowDown className="text-pink" size={20} />
            </span>
          )}
        </span>
      ),
    },
  ];

  return {
    summary,
    isFetchingSummary,
    transactions,
    isFetchingTransactions,
    isFetchedTransactions,
    columns,
  };
}
