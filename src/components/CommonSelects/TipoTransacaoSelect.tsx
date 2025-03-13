import BaseSelect from '../BaseSelect/BaseSelect';

type TipoTransacaoSelectProps = {
  onChange: (value: string | number) => void;
};

export default function TipoTransacaoSelect({ onChange }: TipoTransacaoSelectProps) {
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

  return <BaseSelect onChange={onChange} options={selectOptions} placeholder="Selecione o Tipo de Transação" />;
}
