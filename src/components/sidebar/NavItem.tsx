import { ReactNode } from 'react';
import { Link } from 'react-router';

type NavItemProps = {
  icon: ReactNode;
  text: string;
  path: string;
};

export const NavItem = ({ icon, text, path }: NavItemProps) => {
  return (
    <Link to={path} className="w-full flex items-center justify-start gap-2 h-20">
      {icon}
      <span className="font-medium">{text}</span>
    </Link>
  );
};
