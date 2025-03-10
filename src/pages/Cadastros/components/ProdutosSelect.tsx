import { useQuery } from '@tanstack/react-query';
import BaseSelect from '../../../components/Select/BaseSelect';
import { ProdutosService } from '../../../services/produtos/produtos-service';
import { ProdutoModel } from '../../../models';

type ProdutosSelectProps = {
  onChange: (value: string | number) => void;
};

export default function ProdutosSelect({ onChange }: ProdutosSelectProps) {
  const { data: products, isFetching: isFetchingProducts } = useQuery({
    queryKey: ['all-products'],
    queryFn: async () => {
      const criteria = {
        page: 1,
        pageSize: 1000,
      };

      try {
        const { data } = await ProdutosService.GetAll(criteria);
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

  const selectOptions = products.map((product: ProdutoModel) => ({
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
