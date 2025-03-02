import { ReactNode } from 'react';
import { Sidebar } from './sidebar/Sidebar';

type BaseContainerProps = {
  children: ReactNode;
};

export const BaseContainer = ({ children }: BaseContainerProps) => {
  return (
    <div className="flex bg-dark-900 text-default-text">
      <Sidebar />
      <main className="w-full pt-4 p-6">{children}</main>
    </div>
  );
};
