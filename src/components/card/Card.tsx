import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  title: string;
  subtitle?: string;
};

export default function Card({ children, title, subtitle }: CardProps) {
  return (
    <article className="bg-dark-700 rounded-[10px] pt-5 pb-5 pl-8 pr-8 flex flex-col gap-5 w-full h-full">
      <header className="flex flex-col gap-1 font-semibold">
        <h3 className="text-title-text">{title}</h3>
        {subtitle && <h4 className="text-default-text text-sm">{subtitle}</h4>}
      </header>
      <>{children}</>
    </article>
  );
}
