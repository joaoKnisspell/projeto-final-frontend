import { Select } from 'antd';

type SelectOptionProps = {
  label: string;
  value: string | number | number[];
};

type BaseSelectProps = {
  placeholder: string;
  options: SelectOptionProps[];
  onChange: (value: string | number) => void;
  isLoading?: boolean;
  multiple?: 'tags' | 'multiple' | undefined;
};

export default function BaseSelect({
  placeholder,
  options,
  onChange,
  isLoading,
  multiple = undefined,
}: BaseSelectProps) {
  return (
    <Select
      style={{ minHeight: '40px' }}
      className="bg-dark-700 rounded-md"
      placeholder={placeholder}
      options={options}
      onChange={onChange}
      loading={isLoading}
      mode={multiple}
    />
  );
}
