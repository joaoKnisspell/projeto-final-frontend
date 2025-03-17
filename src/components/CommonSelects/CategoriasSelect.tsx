import { useQuery } from '@tanstack/react-query';
import BaseSelect from '../BaseSelect/BaseSelect';
import { CategoriesService } from '../../services/categorias/categorias-service';
import { CategoriesModel } from '../../models';

type CategoriesSelectProps = {
  disabled: boolean;
  onChange: (value: string | number) => void;
  initialValue: string | null | number | undefined;
};

export default function CategoriesSelect({ onChange, disabled, initialValue }: CategoriesSelectProps) {
  const { data: categories, isFetching: isFetchingCategories } = useQuery({
    queryKey: ['categories-select'],
    queryFn: async () => {
      const criteria = {
        page: 1,
        pageSize: 1000,
      };
      try {
        const { data } = await CategoriesService.GetAll(criteria);
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

  const selectOptions = categories?.map((category: CategoriesModel) => ({
    label: category.nome,
    value: category.categoriaId,
  }));

  return (
    <BaseSelect
      onChange={onChange}
      isLoading={isFetchingCategories}
      options={selectOptions}
      placeholder="Selecione a categoria"
      disabled={disabled}
      initialValue={initialValue}
    />
  );
}
