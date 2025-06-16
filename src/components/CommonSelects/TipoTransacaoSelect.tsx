import BaseSelect from '../BaseSelect/BaseSelect';

type TipoTransacaoSelectProps = {
  onChange: (value: string | number) => void;
  initialValue: string | null | undefined;
  disabled: boolean;
};

export default function TipoTransacaoSelect({ onChange, initialValue, disabled }: TipoTransacaoSelectProps) {
  const selectOptions = [
    {
      label: 'Entrada',
      value: 'entrada',
    },
    {
      label: 'Saída',
      value: 'saida',
    },
  ];

  return (
    <BaseSelect
      disabled={disabled}
      initialValue={initialValue}
      onChange={onChange}
      options={selectOptions}
      placeholder="Selecione o Tipo de Transação"
    />
  );
}
