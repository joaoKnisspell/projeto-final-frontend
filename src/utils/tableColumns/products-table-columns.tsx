import { ProdutoModel } from '../../models';

export const ProductsTablecolumns = [
  {
    title: 'Nome',
    dataIndex: 'nome',
    key: 'nome',
    render: (_: unknown, record: ProdutoModel) => (
      <span className="font-medium">{record?.nome ?? 'Não Informado.'}</span>
    ),
  },
  {
    title: 'Categoria',
    dataIndex: 'categoriaId',
    key: 'categoriaId',
    render: (_: unknown, record: ProdutoModel) => <span>{record?.categoria?.nome ?? 'Não Informado.'}</span>,
  },
  {
    title: 'Preço',
    dataIndex: 'valor',
    key: 'valor',
    render: (_: unknown, record: ProdutoModel) => (
      <span>{record?.valor?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) ?? 'Não Informado'}</span>
    ),
  },
];
