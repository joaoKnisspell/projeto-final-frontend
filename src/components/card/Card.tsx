import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  heading: {
    title: string;
    size?: 'sm' | 'md' | 'lg';
  };
  subtitle?: {
    text: string;
  };
};

export default function Card({ children, heading, subtitle }: CardProps) {
  return (
    <article className="bg-dark-700 rounded-[10px]">
      <header className="flex flex-col gap-1.5">
        <h3>{heading.title}</h3>
        {subtitle && <h4>{subtitle.text}</h4>}
      </header>
      <section>{children}</section>
    </article>
  );
}
