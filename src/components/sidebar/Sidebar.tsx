import { NavItem } from './NavItem';
import { ArrowRightLeft, ChartColumnStacked, LayoutDashboard, PackageSearch } from 'lucide-react';

export const Sidebar = () => {
  return (
    <aside className="w-48 h-screen pl-4 pr-4 border-r-2 border-r-sidebar-line text-sm pt-6 pb-6">
      <h1 className="font-bold text-4xl text-gray-50 pb-6">GERE+</h1>
      <nav className="flex flex-col gap-6">
        <NavItem icon={<LayoutDashboard width={14} height={14} />} text="Dashboard" path="/" />
        <NavItem icon={<ArrowRightLeft width={14} height={14} />} text="Transações" path="/transacoes" />
        <NavItem icon={<ChartColumnStacked width={14} height={14} />} text="Categorias" path="/categorias" />
        <NavItem icon={<PackageSearch width={14} height={14} />} text="Produtos" path="/Produtos" />
      </nav>
    </aside>
  );
};
