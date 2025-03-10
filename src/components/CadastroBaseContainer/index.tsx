import { Button, Drawer, Form, Input, Row, Table } from 'antd';
import { Plus } from 'lucide-react';
import Card from '../Card/Card';
import { useState } from 'react';
import { CadastroBaseContainerModel } from '../../models';
import Label from '../Label';
import BaseSelect from '../Select/BaseSelect';
import { useForm } from 'antd/es/form/Form';
import TipoTransacaoSelect from '../../pages/Cadastros/components/TipoTransacaoSelect';
import ProdutosSelect from '../../pages/Cadastros/components/ProdutosSelect';

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
  const [registerForm] = useForm();

  const inputStyle = {
    backgroundColor: '#21222d',
    border: 'none',
  };

  const handleOpenModal = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseModal = () => {
    setIsDrawerOpen(false);
    registerForm.resetFields();
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
        <Form form={registerForm} className="text-white flex flex-col gap-8 h-full justify-between" layout="vertical">
          <section>
            {type === 'transacao' && (
              <>
                <Form.Item
                  rules={[{ required: true, message: 'Selecione o tipo da transação.' }]}
                  name="tipoPedido"
                  label={<Label labelName="Tipo" />}
                >
                  <TipoTransacaoSelect
                    onChange={(value: string | number) => {
                      registerForm.setFieldValue('tipoPedido', value);
                    }}
                  />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true, message: 'Selecione um ou mais produtos.' }]}
                  name="produtosIds"
                  label={<Label labelName="Produtos" />}
                >
                  <ProdutosSelect
                    onChange={(value: string | number | number[]) => {
                      registerForm.setFieldValue('produtosIds', value);
                    }}
                  />
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
              <Form.Item style={{ marginBottom: 0 }} className="w-full">
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
              </Form.Item>
            </Row>
            <Row>
              <Form.Item style={{ marginBottom: 0 }} className="w-full">
                <Button
                  htmlType="submit"
                  style={{
                    backgroundColor: '#20aef3',
                    border: '0px solid transparent',
                    color: '#ffffff',
                    boxShadow: 'none',
                    fontWeight: '500',
                  }}
                  className="w-full"
                  onClick={() => console.log(registerForm.getFieldsValue())}
                >
                  Salvar
                </Button>
              </Form.Item>
            </Row>
          </footer>
        </Form>
      </Drawer>
    </section>
  );
}
