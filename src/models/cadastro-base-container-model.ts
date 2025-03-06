import { ReactNode } from 'react';

export type CadastroBaseContainerModel = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: any;
  searchText: 'categoria' | 'produto' | 'transação';
  title: string;
  buttonText: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  isFetchingData: boolean;
  drawerTitle: string;
  drawerForm: ReactNode;
};
