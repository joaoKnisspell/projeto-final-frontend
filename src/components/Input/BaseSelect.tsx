import { Select } from 'antd';

type BaseInputProps = {
  placeholder: string;
};

export default function BaseSelect({ placeholder }: BaseInputProps) {
  return <Select style={{ height: '40px' }} className="bg-dark-700 rounded-md" placeholder={placeholder} />;
}
