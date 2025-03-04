import { PedidoProdutoModel } from './pedidoProduto-model';

export type TransactionModel = {
  pedidoId: number;
  dataPedido: string;
  pedidoProdutos: PedidoProdutoModel[];
  tipoPedido: string;
  valorTotal: number;
};
