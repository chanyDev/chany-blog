import { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavItemProps {
  href: string;
  children: ReactNode;
}

const NavItem = ({ href, children }: NavItemProps) => {
  const isActive = useRouter().asPath === href;

  return (
    <li className="px-4 py-2 font-medium">
      <Link href={href}>
        <a className={isActive ? 'underlined active' : 'underlined'}>
          {children}
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
