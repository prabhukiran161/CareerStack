import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Navbar } from '../components/layout/Navbar';
import { MobileBottomNav } from '../components/layout/MobileBottomNav';

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <MobileBottomNav />
    </div>
  ),
});
