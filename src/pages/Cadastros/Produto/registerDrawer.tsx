import { Drawer, Input, Row, Button, Form } from 'antd';
import { BaseInputStyles } from '../../../components/Input/BaseInputStyles';
import Label from '../../../components/Label';
import { useForm } from 'antd/es/form/Form';
import CategoriesSelect from '../../../components/CommonSelects/CategoriasSelect';
import { ProdutoModel } from '../../../models';
import { useEffect } from 'react';

type RegisterDrawerProps = {
  isDrawerOpen: boolean;
  mode: 'view' | 'add' | 'edit';
  mutation: any;
  data: ProdutoModel | null;
  handleCloseModal: () => void;
};

export default function RegisterDrawer({ isDrawerOpen, mode, data, mutation, handleCloseModal }: RegisterDrawerProps) {
  const [registerForm] = useForm();

  useEffect(() => {
    if (data && mode !== 'add') {
      registerForm.setFieldsValue({
        nomeProduto: data.nome,
        categoriaId: data.categoria.categoriaId,
        valor: data.valor,
      });
    }
  }, [data, mode]);

  return (
    <Drawer
      className="text-white"
      title={mode !== 'view' ? 'Novo Produto' : data?.nome}
      open={isDrawerOpen}
      onClose={() => {
        handleCloseModal();
        registerForm.resetFields();
      }}
      closable
    >
      <Form
        onFinish={() => {
          mutation.mutate(registerForm.getFieldsValue());
          registerForm.resetFields();
        }}
        form={registerForm}
        className="text-white flex flex-col gap-8 h-full justify-between"
        layout="vertical"
      >
        <section>
          <>
            <Form.Item
              rules={[{ required: true, message: 'O Nome do produto é obrigatório.' }]}
              name="nomeProduto"
              label={<Label labelName="Nome" />}
            >
              <Input
                style={{ ...BaseInputStyles, color: mode !== 'view' ? '#ffffff' : '#ffffff' }}
                placeholder="Digite o nome para o produto"
                disabled={mode === 'view'}
              />
            </Form.Item>
            <Form.Item
              rules={[{ required: true, message: 'Selecione a categoria do produto.' }]}
              name="categoriaId"
              label={<Label labelName="Categoria" />}
            >
              <CategoriesSelect
                initialValue={mode !== 'add' ? data?.categoria?.categoriaId : null}
                onChange={(value: string | number) => {
                  console.log(value);
                  registerForm.setFieldValue('categoriaId', value);
                }}
                disabled={mode === 'view'}
              />
            </Form.Item>
            <Form.Item
              rules={[{ required: true, message: 'O Valor do produto é obrigatório.' }]}
              name="valor"
              label={<Label labelName="Valor" />}
            >
              <Input
                disabled={mode === 'view'}
                type="number"
                style={{ ...BaseInputStyles, color: mode !== 'view' ? '#ffffff' : '#ffffff' }}
                placeholder="Digite o valor do produto"
              />
            </Form.Item>
          </>
        </section>
        <footer className="flex flex-col gap-4">
          {mode !== 'view' ? (
            <>
              {' '}
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
            </>
          ) : (
            <Row>
              <Form.Item style={{ marginBottom: 0 }} className="w-full">
                <Button
                  style={{
                    backgroundColor: '#20aef3',
                    border: '0px solid transparent',
                    color: '#ffffff',
                    boxShadow: 'none',
                    fontWeight: '500',
                  }}
                  className="w-full"
                  onClick={handleCloseModal}
                >
                  Fechar
                </Button>
              </Form.Item>
            </Row>
          )}
        </footer>
      </Form>
    </Drawer>
  );
}
