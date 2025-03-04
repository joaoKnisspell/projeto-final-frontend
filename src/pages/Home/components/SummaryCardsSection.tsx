import { ChartNoAxesCombined, FileChartLine, ShoppingBag, HandCoins } from 'lucide-react';
import SummaryDetailCard from '../../../components/SummaryDetailCard/SummaryDetailCard';
import { SummaryModel } from '../../../models';

type SummaryCardsSectionProps = {
  summary: SummaryModel;
};

export default function SummaryCardsSection({ summary }: SummaryCardsSectionProps) {
  return (
    <section className="flex justify-between gap-4 flex-wrap w-full">
      <SummaryDetailCard
        icon={<ChartNoAxesCombined className="text-orange" size={26} />}
        info={summary.totalDoDia.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        title="Saldo do dia"
        subtitle="+10% from yesterday"
        color="orange"
      />
      <SummaryDetailCard
        icon={<FileChartLine className="text-green" size={26} />}
        info={summary.numeroVendas}
        title="Número de Vendas"
        subtitle="+8% from yesterday "
        color="green"
      />
      <SummaryDetailCard
        icon={<ShoppingBag className="text-pink" size={26} />}
        info={summary.qtdProdutosVendidos}
        title="Produtos Vendidos"
        subtitle="+2% from yesterday"
        color="pink"
      />
      <SummaryDetailCard
        icon={<HandCoins className="text-blue" size={26} />}
        info={summary.saidas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        title="Gastos"
        subtitle="+3% from yesterday"
        color="blue"
      />
    </section>
  );
}
