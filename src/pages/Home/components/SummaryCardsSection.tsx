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
        info={summary?.totalDoDia.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        title="Saldo do dia"
        subtitle={`Saldo do dia ${new Date().toLocaleDateString('pt-BR')}`}
        color="orange"
      />
      <SummaryDetailCard
        icon={<FileChartLine className="text-green" size={26} />}
        info={summary?.numeroVendas}
        title="Número de Vendas"
        subtitle={`Qtd. Vendas do dia ${new Date().toLocaleDateString('pt-BR')}`}
        color="green"
      />
      <SummaryDetailCard
        icon={<ShoppingBag className="text-pink" size={26} />}
        info={summary?.qtdProdutosVendidos}
        title="Produtos Vendidos"
        subtitle={`Qtd. produtos vendidos do dia ${new Date().toLocaleDateString('pt-BR')}`}
        color="pink"
      />
      <SummaryDetailCard
        icon={<HandCoins className="text-blue" size={26} />}
        info={summary?.saidas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        title="Gastos"
        subtitle={`Gastos do dia ${new Date().toLocaleDateString('pt-BR')}`}
        color="blue"
      />
    </section>
  );
}
