import { Select } from 'antd';

type SelectOptionProps = {
  label: string;
  value: string | number | number[];
};

type BaseSelectProps = {
  placeholder: string;
  options: SelectOptionProps[];
  isLoading?: boolean;
  multiple?: 'tags' | 'multiple' | undefined;
  disabled: boolean;
  onChange?: (value: string | number) => void;
  initialValue: string | null | number | undefined;
};

export default function BaseSelect({
  placeholder,
  options,
  isLoading,
  multiple = undefined,
  disabled,
  onChange,
  initialValue,
}: BaseSelectProps) {
  return (
    <Select
      style={{ minHeight: '40px' }}
      className="bg-dark-700 rounded-md"
      placeholder={placeholder}
      options={options}
      loading={isLoading}
      mode={multiple}
      disabled={disabled}
      onChange={onChange}
      defaultValue={initialValue}
      value={initialValue ? initialValue : undefined}
    />
  );
}
