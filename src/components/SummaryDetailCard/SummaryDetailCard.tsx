import { ReactNode } from 'react';

type SummaryDetailCardProps = {
  icon: ReactNode;
  info: string | number;
  title: string;
  subtitle: string;
  color: string;
};

export default function SummaryDetailCard({ icon, info, title, subtitle, color }: SummaryDetailCardProps) {
  return (
    <div className="flex flex-col gap-3 p-2.5 pl-3 pr-3 w-fit h-fit rounded-[10px] bg-dark-900">
      <header>{icon}</header>
      <section className="flex flex-col gap-1.5">
        <span className="font-semibold text-title-text text-base">{info}</span>
        <h3 className="font-medium text-gray-text text-sm">{title}</h3>
        <h4 className={`font-medium text-xs text-${color}`}>{subtitle}</h4>
      </section>
    </div>
  );
}
