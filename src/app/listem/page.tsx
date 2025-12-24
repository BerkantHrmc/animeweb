import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ListemClient } from './ListemClient';

export default function ListemPage() {
  return (
    <div className="min-h-screen">
      <Navbar variant="app" />

      <main className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">Listem</h1>
        <p className="mt-2 text-sm text-white/60">Eklediklerin burada listelenir.</p>
        <ListemClient />
      </main>

      <Footer />
    </div>
  );
}
