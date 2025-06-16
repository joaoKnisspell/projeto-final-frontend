import { Drawer, Row, Button, Form, Input } from 'antd';
import Label from '../../../components/Label';
import { useForm } from 'antd/es/form/Form';
import ProdutosSelect from '../../../components/CommonSelects/ProdutosSelect';
import TipoTransacaoSelect from '../../../components/CommonSelects/TipoTransacaoSelect';
import { useEffect } from 'react';
import { TransactionModel } from '../../../models';

type RegisterDrawerProps = {
  isDrawerOpen: boolean;
  handleCloseModal: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mutation: any;
  mode: 'view' | 'add' | 'edit';
  data: TransactionModel | null;
};

export default function RegisterDrawer({ isDrawerOpen, handleCloseModal, mutation, data, mode }: RegisterDrawerProps) {
  const [registerForm] = useForm();

  useEffect(() => {
    if (data && mode !== 'add') {
      registerForm.setFieldsValue({
        tipoPedido: data.tipoPedido,
        produtos: data.pedidoProdutos,
      });
    }
  }, [data, mode]);

  return (
    <Drawer
      className="text-white"
      title={'Nova Transação'}
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
              rules={[{ required: true, message: 'Selecione o tipo da transação.' }]}
              name="tipoPedido"
              label={<Label labelName="Tipo" />}
            >
              <TipoTransacaoSelect
                disabled={mode !== 'add' ? true : false}
                initialValue={mode === 'view' ? data?.tipoPedido : null}
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
  );
}
