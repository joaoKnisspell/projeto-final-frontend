import { Button, Input, Table } from 'antd';
import { Plus } from 'lucide-react';
import Card from '../Card/Card';
type CadastroBaseContainerProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: any;
  searchText: 'categoria' | 'produto' | 'transação';
  title: string;
  buttonText: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  isFetching: boolean;
};

export default function CadastroBaseContainer({
  columns,
  searchText,
  title,
  buttonText,
  data,
  isFetching,
}: CadastroBaseContainerProps) {
  const inputStyle = {
    backgroundColor: '#21222d',
    border: 'none',
  };

  return (
    <section className="max-w-[983px] w-full flex flex-col gap-4">
      <header className="flex items-center gap-4">
        <div className="w-full">
          <Input style={inputStyle} placeholder={`Pesquisar ${searchText} por data...`} />
        </div>
        <div>
          <Button style={{ ...inputStyle, color: '#87888c' }}>
            <span>{buttonText}</span>
            <Plus size={20} />
          </Button>
        </div>
      </header>
      <main className="h-full">
        <Card title={title}>
          <Table columns={columns} dataSource={data} loading={isFetching} size="middle" className="h-full" />
        </Card>
      </main>
    </section>
  );
}
