import { useQuery } from '@tanstack/react-query';
import { ProdutoModel } from '../../models';
import { ProductsService } from '../../services/produtos/produtos-service';
import BaseSelect from '../BaseSelect/BaseSelect';
import { useEffect } from 'react';

type ProdutosSelectProps = {
  onChange: (value: string | number) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialValue: any;
  disabled: boolean;
};

export default function ProdutosSelect({ onChange, initialValue, disabled }: ProdutosSelectProps) {
  useEffect(() => {
    console.log(initialValue);
  }, [initialValue]);

  const { data: products, isFetching: isFetchingProducts } = useQuery({
    queryKey: ['products-select'],
    queryFn: async () => {
      const criteria = {
        page: 1,
        pageSize: 1000,
      };

      try {
        const { data } = await ProductsService.GetAll(criteria);
        if (data) {
          return data.data;
        }
        return null;
      } catch (err) {
        console.error(err);
      }
    },
    enabled: true,
  });

  const selectOptions =
    products &&
    products.map((product: ProdutoModel) => ({
      label: product.nome,
      value: product.produtoId,
    }));

  return (
    <BaseSelect
      disabled={disabled}
      initialValue={initialValue}
      isLoading={isFetchingProducts}
      onChange={onChange}
      options={selectOptions}
      placeholder="Selecione o(s) Produtos"
      multiple="multiple"
    />
  );
}
