import { Button, Drawer, Form, Input, Row, Select, Table } from 'antd';
import { Plus } from 'lucide-react';
import Card from '../Card/Card';
import { useState } from 'react';
import { CadastroBaseContainerModel } from '../../models';
import Label from '../Label';
import BaseSelect from '../Input/BaseSelect';

export default function CadastroBaseContainer({
  title,
  searchText,
  buttonText,
  columns,
  data,
  drawerTitle,
  isFetchingData,
  mutation,
  pageAction,
  totalPages,
  type,
}: CadastroBaseContainerModel) {
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
          <Input style={inputStyle} placeholder={`Pesquisar ${searchText} por data...`} />
        </div>
        <div>
          <Button onClick={handleOpenModal} style={{ ...inputStyle, color: '#87888c' }}>
            <span>{buttonText}</span>
            <Plus size={20} />
          </Button>
        </div>
      </header>
      <main className="h-full">
        <Card title={title}>
          <Table
            columns={columns}
            dataSource={data}
            loading={isFetchingData}
            size="middle"
            className="h-full"
            pagination={{
              showSizeChanger: true,
              pageSizeOptions: [5, 10],
              total: totalPages,
              onChange: (page: number, pageSize: number) => pageAction(page, pageSize),
            }}
          />
        </Card>
      </main>
      <Drawer
        className="text-white"
        title={`Novo(a) ${drawerTitle}`}
        open={isDrawerOpen}
        onClose={handleCloseModal}
        closable
      >
        <Form className="text-white flex flex-col gap-8 h-full justify-between" layout="vertical">
          <section>
            {type === 'transacao' && (
              <>
                <Form.Item label={<Label labelName="Tipo" />}>
                  <BaseSelect placeholder="Selecione o tipo de transação" />
                </Form.Item>
                <Form.Item label={<Label labelName="Produtos" />}>
                  <BaseSelect placeholder="Selecione um ou mais produtos" />
                </Form.Item>
                <Form.Item label={<Label labelName="Total" />}>
                  <Input
                    style={{ backgroundColor: '#21222d', outline: 'none' }}
                    className="bg-dark-700 h-10 border-0"
                    placeholder="Valor total da transação"
                  />
                </Form.Item>
              </>
            )}
          </section>
          <footer className="flex flex-col gap-4">
            <Row>
              <Button
                style={{
                  backgroundColor: 'orange',
                  border: '0px solid transparent',
                  color: '#ffffff',
                  boxShadow: 'none',
                  fontWeight: '500',
                }}
                className="w-full"
                onClick={handleCloseModal}
              >
                Cancelar
              </Button>
            </Row>
            <Row>
              <Button
                style={{
                  backgroundColor: '#20aef3',
                  border: '0px solid transparent',
                  color: '#ffffff',
                  boxShadow: 'none',
                  fontWeight: '500',
                }}
                className="w-full"
                onClick={() =>
                  mutation.mutate({
                    dataPedido: new Date(),
                    produtosIds: [1, 3, 9, 11],
                    tipoPedido: 'saida',
                  })
                }
              >
                Salvar
              </Button>
            </Row>
          </footer>
        </Form>
      </Drawer>
    </section>
  );
}
