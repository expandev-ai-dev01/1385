import { Outlet } from 'react-router-dom';
import { Header } from '@/core/components/Header';
import { Footer } from '@/core/components/Footer';

/**
 * @component RootLayout
 * @summary Root layout component that provides the main structure for all pages
 * @domain core
 * @type layout-component
 * @category layout
 *
 * @layout
 * - Layout: Root layout with header and footer
 * - Sections: Header, Main Content (Outlet), Footer
 * - Navigation: Global header navigation
 */
export const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
