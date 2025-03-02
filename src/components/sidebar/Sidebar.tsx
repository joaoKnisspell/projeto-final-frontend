import { NavItem } from './NavItem';
import { ArrowRightLeft, LayoutDashboard } from 'lucide-react';
import { ChartSpline } from 'lucide-react';

export const Sidebar = () => {
  return (
    <aside className="w-48 h-screen pl-4 pt-6 pb-6 border-r-2 border-r-sidebar-line text-sm">
      {/* <span className="text-5xl">Logo</span> */}
      <nav>
        <NavItem icon={<LayoutDashboard width={14} height={14} />} text="Dashboard" path="/" />
        <NavItem icon={<ArrowRightLeft width={14} height={14} />} text="Transações" path="/transacoes" />
        <NavItem icon={<ChartSpline width={14} height={14} />} text="Relatórios" path="/relatorios" />
      </nav>
    </aside>
  );
};
