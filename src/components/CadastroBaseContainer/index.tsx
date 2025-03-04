import { Button, Input, Table } from 'antd';
import { Plus } from 'lucide-react';
import Card from '../Card/Card';
import { ColumnsType } from 'antd/es/table';
type CadastroBaseContainerProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: any;
};

export default function CadastroBaseContainer({ columns }: CadastroBaseContainerProps) {
  return (
    <section className="max-w-[983px] w-full grid grid-rows-7">
      <header className="">
        <div>
          <Input placeholder="Pesquisar Categoria..." />
        </div>
        <div>
          <Button>
            Nova Categoria
            <Plus />
          </Button>
        </div>
      </header>
      <main className="row-span-6 h-full">
        <Card title="Listagem de Transações">
          <Table columns={columns} className="h-[100%]" />
        </Card>
      </main>
    </section>
  );
}
