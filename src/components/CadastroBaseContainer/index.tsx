import { Button, Drawer, Form, Input, Table } from 'antd';
import { Plus } from 'lucide-react';
import Card from '../Card/Card';
import { useState } from 'react';
import { CadastroBaseContainerModel } from '../../models';

export default function CadastroBaseContainer(props: CadastroBaseContainerModel) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const inputStyle = {
    backgroundColor: '#21222d',
    border: 'none',
  };

  const handleOpenModal = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseModal = () => {
    setIsDrawerOpen(false);
  };

  return (
    <section className="max-w-[983px] w-full flex flex-col gap-4">
      <header className="flex items-center gap-4">
        <div className="w-full">
          <Input style={inputStyle} placeholder={`Pesquisar ${props.searchText} por data...`} />
        </div>
        <div>
          <Button onClick={handleOpenModal} style={{ ...inputStyle, color: '#87888c' }}>
            <span>{props.buttonText}</span>
            <Plus size={20} />
          </Button>
        </div>
      </header>
      <main className="h-full">
        <Card title={props.title}>
          <Table
            columns={props.columns}
            dataSource={props.data}
            loading={props.isFetchingData}
            size="middle"
            className="h-full"
            pagination={{
              showSizeChanger: true,
              pageSizeOptions: [5, 10],
              total: props.totalPages,
              onChange: (page: number, pageSize: number) => props.pageAction(page, pageSize),
            }}
          />
        </Card>
      </main>
      <Drawer
        className="text-white"
        title={`Novo(a) ${props.drawerTitle}`}
        open={isDrawerOpen}
        onClose={handleCloseModal}
        closable
      >
        <Form>{props.drawerForm}</Form>
      </Drawer>
    </section>
  );
}
