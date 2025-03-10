import { Input } from 'antd';

type BaseInputProps = {
  placeholder: string;
};

export default function BaseInput({ placeholder }: BaseInputProps) {
  return <Input style={{ minHeight: '40px', backgroundColor: '#21222d' }} placeholder={placeholder} />;
}
