import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SectionHeader } from '@/components/SectionHeader';
import { HorizontalRow } from '@/components/HorizontalRow';
import { AnimeCard } from '@/components/AnimeCard';
import { ANIME, pick } from '@/lib/mock';

export default function ListemPage() {
  const myList = pick(ANIME, 8);
  const continueWatching = pick(ANIME, 6);

  return (
    <div className="min-h-screen">
      <Navbar variant="app" />

      <main className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">Listem</h1>
        <p className="mt-2 text-sm text-white/60">Kaydettiklerin, izlemeye devam ettiklerin ve hızlı erişim.</p>

        <section className="mt-10">
          <SectionHeader title="İzlemeye Devam Et" />
          <HorizontalRow>
            {continueWatching.map((a) => (
              <AnimeCard key={a.slug} anime={a} />
            ))}
          </HorizontalRow>
        </section>

        <section className="mt-10">
          <SectionHeader title="Kaydedilenler" />
          <div className="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {myList.map((a) => (
              <AnimeCard key={a.slug} anime={a} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
