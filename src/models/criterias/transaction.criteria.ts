export type TransactionCriteria = {
  dataPedido: Date;
  produtosIds: number[];
  tipoPedido: 'entrada' | 'saida';
};
