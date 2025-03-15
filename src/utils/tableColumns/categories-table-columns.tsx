import { CategoriesModel } from '../../models';

export const CategoriesTablecolumns = [
  {
    title: 'Id',
    dataIndex: 'categoriaId',
    key: 'categoriaId',
    render: (_: unknown, record: CategoriesModel) => <span className="font-medium">{record.categoriaId}</span>,
  },
  {
    title: 'Nome',
    dataIndex: 'nome',
    key: 'nome',
  },
];
