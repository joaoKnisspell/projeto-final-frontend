import { Button, Input, Table } from 'antd';
import { Plus } from 'lucide-react';
import Card from '../Card/Card';
import { ColumnsType } from 'antd/es/table';
type CadastroBaseContainerProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: any;
  pagina: 'categoria' | 'produto' | 'pedido';
};

export default function CadastroBaseContainer({ columns, pagina }: CadastroBaseContainerProps) {
  const inputStyle = {
    backgroundColor: '#21222d',
    border: 'none',
  };

  return (
    <section className="max-w-[983px] w-full flex flex-col gap-4">
      <header className="flex items-center gap-4">
        <div className="w-full">
          <Input style={inputStyle} placeholder={`Pesquisar ${pagina}...`} />
        </div>
        <div>
          <Button style={{ ...inputStyle, color: '#87888c' }}>
            <span>{`Nova ${pagina.charAt(0).toUpperCase + pagina.slice(1, pagina.length)}`}</span>
            <Plus size={20} />
          </Button>
        </div>
      </header>
      <main className="h-full">
        <Card title={`Listagem de ${pagina.charAt(0).toUpperCase() + pagina.slice(1, pagina.length)}s`}>
          <Table columns={columns} className="h-full" />
        </Card>
      </main>
    </section>
  );
}
