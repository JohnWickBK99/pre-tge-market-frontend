import { Footer } from './footer';
import { Header } from './header';
import { TopBar } from './topbar';

/**
 * AppLayout Component - Main layout wrapper
 * Includes sticky TopBar, Header, and Footer
 */
export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Sticky TopBar */}
      <TopBar />

      {/* Sticky Header */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-1 flex-col">
        <div className="container mx-auto flex h-full flex-1 flex-col">
          {children}
        </div>
      </main>

      {/* Sticky Footer */}
      <Footer />
    </div>
  );
}
