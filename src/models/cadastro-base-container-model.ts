export type CadastroBaseContainerModel = {
  type: 'transacao' | 'produto' | 'categoria';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: any;
  searchText: 'categoria' | 'produto' | 'transação';
  title: string;
  buttonText: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  isFetchingData: boolean;
  drawerTitle: string;
  totalPages: number;
  pageAction: (page: number, pageSize: number) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mutate: any;
};
