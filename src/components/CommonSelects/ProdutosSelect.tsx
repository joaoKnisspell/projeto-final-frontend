import { useQuery } from '@tanstack/react-query';
import { ProdutoModel } from '../../models';
import { ProductsService } from '../../services/produtos/produtos-service';
import BaseSelect from '../BaseSelect/BaseSelect';

type ProdutosSelectProps = {
  onChange: (value: string | number) => void;
};

export default function ProdutosSelect({ onChange }: ProdutosSelectProps) {
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
      isLoading={isFetchingProducts}
      onChange={onChange}
      options={selectOptions}
      placeholder="Selecione o(s) Produtos"
      multiple="multiple"
    />
  );
}
