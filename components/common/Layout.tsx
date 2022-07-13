import { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col max-w-3xl min-h-screen pt-20 mx-auto mb-auto xl:max-w-5xl">
      <Header />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
