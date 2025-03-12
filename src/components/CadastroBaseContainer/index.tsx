import { Button, Drawer, Form, Input, Row, Table } from 'antd';
import { Plus } from 'lucide-react';
import Card from '../Card/Card';
import { useState } from 'react';
import { CadastroBaseContainerModel } from '../../models';
import Label from '../Label';
import { FormProps, useForm } from 'antd/es/form/Form';
import TipoTransacaoSelect from '../../pages/Cadastros/components/TipoTransacaoSelect';
import ProdutosSelect from '../../pages/Cadastros/components/ProdutosSelect';
import { BaseInputStyles } from '../Input/BaseInputStyles';
import CategoriesSelect from '../../pages/Cadastros/components/CategoriasSelect';
import { ToastContainer } from 'react-toastify';

export default function CadastroBaseContainer({
  title,
  searchText,
  buttonText,
  columns,
  data,
  drawerTitle,
  isFetchingData,
  mutate,
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

  type FieldType = {
    nome: string;
  };

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    mutate(values);
    handleCloseModal();
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
      <Drawer className="text-white" title={drawerTitle} open={isDrawerOpen} onClose={handleCloseModal} closable>
        <Form
          onFinish={onFinish}
          form={registerForm}
          className="text-white flex flex-col gap-8 h-full justify-between"
          layout="vertical"
        >
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
              </>
            )}

            {type === 'categoria' && (
              <>
                <Form.Item
                  rules={[{ required: true, message: 'O Nome para a categoria é obrigatório.' }]}
                  name="nomeCategoria"
                  label={<Label labelName="Nome" />}
                >
                  <Input style={BaseInputStyles} placeholder="Digite o nome para a categoria" />
                </Form.Item>
              </>
            )}

            {type === 'produto' && (
              <>
                <Form.Item
                  rules={[{ required: true, message: 'O Nome do produto é obrigatório.' }]}
                  name="nomeProduto"
                  label={<Label labelName="Nome" />}
                >
                  <Input style={BaseInputStyles} placeholder="Digite o nome para o produto" />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true, message: 'Selecione a categoria do produto.' }]}
                  name="categoriaId"
                  label={<Label labelName="Categoria" />}
                >
                  <CategoriesSelect
                    onChange={(value: string | number) => {
                      registerForm.setFieldValue('categoriaId', value);
                    }}
                  />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true, message: 'O Valor do produto é obrigatório.' }]}
                  name="valor"
                  label={<Label labelName="Valor" />}
                >
                  <Input type="number" style={BaseInputStyles} placeholder="Digite o valor do produto" />
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
                >
                  Salvar
                </Button>
              </Form.Item>
            </Row>
          </footer>
        </Form>
      </Drawer>
      <ToastContainer autoClose={3000} theme="dark" />
    </section>
  );
}
