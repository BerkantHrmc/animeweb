import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Navbar variant="app" />
      <main className="mx-auto grid max-w-6xl place-items-center px-4 py-20">
        <div className="max-w-md text-center">
          <div className="text-6xl font-extrabold text-white/20">404</div>
          <h1 className="mt-3 text-2xl font-extrabold text-white">Aradığın sayfa bulunamadı</h1>
          <p className="mt-2 text-sm text-white/60">Bu bir demo arayüz. Belki de yanlış bir linke geldin.</p>
          <div className="mt-6">
            <Link href="/dashboard">
              <Button className="h-11">Dashboard&apos;a dön</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
