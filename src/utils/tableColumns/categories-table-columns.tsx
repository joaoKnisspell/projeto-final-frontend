import { Button, Row } from 'antd';
import { CategoriesModel } from '../../models';
import { Eye, FilePenLine, Trash2 } from 'lucide-react';

export const CategoriesTablecolumns = [
  {
    title: 'Ações',
    dataIndex: 'actions',
  },
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
