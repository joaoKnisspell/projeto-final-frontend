import { Drawer, Input, Row, Button, Form } from 'antd';
import { BaseInputStyles } from '../../../components/Input/BaseInputStyles';
import Label from '../../../components/Label';
import { useForm } from 'antd/es/form/Form';

type RegisterDrawerProps = {
  isDrawerOpen: boolean;
  handleCloseModal: () => void;
  mutation: any;
};

export default function RegisterDrawer({ isDrawerOpen, handleCloseModal, mutation }: RegisterDrawerProps) {
  const [registerForm] = useForm();

  return (
    <Drawer
      className="text-white"
      title={'Nova Categoria'}
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
          <Form.Item
            rules={[{ required: true, message: 'O Nome para a categoria é obrigatório.' }]}
            name="nomeCategoria"
            label={<Label labelName="Nome" />}
          >
            <Input style={BaseInputStyles} placeholder="Digite o nome para a categoria" />
          </Form.Item>
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
