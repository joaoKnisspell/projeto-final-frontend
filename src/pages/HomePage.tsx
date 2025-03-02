import { useQuery } from '@tanstack/react-query';
import { CategoriasService } from '../services/categorias/categorias-service';
import { BaseContainer } from '../components/BaseContainer';
import Card from '../components/Card/Card';
import SummaryDetailCard from '../components/SummaryDetailCard/SummaryDetailCard';
import { ChartNoAxesCombined, FileChartLine, ShoppingBag, UserRoundCheck } from 'lucide-react';

export const HomePage = () => {
  const { data, isFetching } = useQuery({
    queryKey: ['categorias'],
    queryFn: async () => {
      try {
        const response = await CategoriasService.GetAll();
        return response;
      } catch (error) {
        console.error(error);
      }
    },
    enabled: true,
  });

  return (
    <>
      <BaseContainer>
        <section>
          <Card title="Vendas do Dia" subtitle="Resumo das Vendas">
            <SummaryDetailCard
              icon={<ChartNoAxesCombined className="text-orange" size={26} />}
              info="$5k"
              title="Total Sales"
              subtitle="+10% from yesterday"
              color="orange"
            />
            <SummaryDetailCard
              icon={<FileChartLine className="text-green" size={26} />}
              info="500"
              title="Total Order"
              subtitle="+8% from yesterday "
              color="green"
            />
            <SummaryDetailCard
              icon={<ShoppingBag className="text-pink" size={26} />}
              info="9"
              title="Product Sold"
              subtitle="+2% from yesterday"
              color="pink"
            />
            <SummaryDetailCard
              icon={<UserRoundCheck className="text-blue" size={26} />}
              info="12"
              title="New Customer"
              subtitle="+3% from yesterday"
              color="blue"
            />
          </Card>
        </section>
      </BaseContainer>
    </>
  );
};
