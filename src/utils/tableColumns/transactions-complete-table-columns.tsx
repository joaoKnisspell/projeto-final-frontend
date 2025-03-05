import { ArrowUp, ArrowDown } from 'lucide-react';
import { PedidoProdutoModel, TransactionModel } from '../../models';

export const TransactionsCompleteTablecolumns = [
  {
    title: 'Data',
    dataIndex: 'dataPedido',
    key: 'dataPedido',
    render: (_: unknown, record: TransactionModel) => (
      <span>{new Date(record?.dataPedido).toLocaleString('pt-BR').toString()}</span>
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
    title: 'Produtos',
    dataIndex: 'produtos',
    key: 'produtos',
    render: (_: unknown, record: TransactionModel) => (
      <span>
        {record?.pedidoProdutos.length <= 3
          ? record?.pedidoProdutos?.map((product: PedidoProdutoModel) => product.produto.nome).join(', ')
          : record?.pedidoProdutos
              ?.slice(0, 3)
              .map((product: PedidoProdutoModel) => product.produto.nome)
              .join(', ') + ' ...'}
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
