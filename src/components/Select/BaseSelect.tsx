import { Select } from 'antd';

type SelectOptionProps = {
  label: string;
  value: string | number;
};

type BaseInputProps = {
  placeholder: string;
  options: SelectOptionProps[];
  onChange: (value: string | number) => void;
};

export default function BaseSelect({ placeholder, options, onChange }: BaseInputProps) {
  return (
    <Select
      style={{ height: '40px' }}
      className="bg-dark-700 rounded-md"
      placeholder={placeholder}
      options={options}
      onChange={onChange}
    />
  );
}
