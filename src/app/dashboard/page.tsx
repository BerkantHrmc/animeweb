import { Navbar } from '@/components/Navbar';
import { Badge } from '@/components/ui/Badge';
import { LinkButton } from '@/components/ui/Button';
import { IconInfo, IconPlay } from '@/components/Icons';
import { AnimeCard } from '@/components/AnimeCard';
import { HorizontalRow } from '@/components/HorizontalRow';
import { SectionHeader } from '@/components/SectionHeader';
import { Top10Row } from '@/components/Top10Row';
import { Footer } from '@/components/Footer';
import { ANIME, pick } from '@/lib/mock';

export default function DashboardPage() {
  const hero = ANIME[0];
  const recommended = pick(ANIME.filter((a) => a.slug !== hero.slug), 6);
  const popular = pick(ANIME.filter((a) => a.slug !== hero.slug), 8);
  const top10 = [...ANIME].sort((a, b) => b.rating - a.rating).slice(0, 10);

  return (
    <div className="min-h-screen">
      <Navbar variant="app" />

      <main className="relative">
        <section className="relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url("${hero.heroImage}")` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-hero-overlay" aria-hidden />
          <div className="absolute inset-0 bg-black/25" aria-hidden />

          <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
            <div className="max-w-2xl">
              <div className="flex flex-wrap gap-2">
                {hero.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-accent/15 px-3 py-1 text-xs font-extrabold text-accent ring-1 ring-accent/25"
                  >
                    {t}
                  </span>
                ))}
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/80 ring-1 ring-white/10">
                  %{hero.match} Eşleşme
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/80 ring-1 ring-white/10">
                  {hero.year}
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/80 ring-1 ring-white/10">
                  {hero.maturity}
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/80 ring-1 ring-white/10">
                  {hero.seasons} Sezon
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-accent ring-1 ring-white/10">
                  ★ {hero.rating.toFixed(1)}
                </span>
              </div>

              <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-white md:text-6xl">
                <span className="text-white">Cyber</span> <span className="text-accent">Ronin</span>
              </h1>

              <p className="mt-5 text-sm leading-relaxed text-white/70 md:text-base">
                {hero.synopsis}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton href={`/anime/${hero.slug}`} className="h-12" size="lg">
                  <IconPlay className="h-5 w-5" /> Hemen İzle
                </LinkButton>
                <LinkButton href={`/anime/${hero.slug}`} variant="secondary" className="h-12" size="lg">
                  <IconInfo className="h-5 w-5" /> Daha Fazla Bilgi
                </LinkButton>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {hero.genres.slice(0, 7).map((g) => (
                  <Badge key={g}>{g}</Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10" id="kesfet">
          <SectionHeader title="Sizin İçin Önerilenler" actionLabel="Tümünü Gör" actionHref="#" />
          <HorizontalRow>
            {recommended.map((a) => (
              <AnimeCard key={a.slug} anime={a} />
            ))}
          </HorizontalRow>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-6" id="filmler">
          <SectionHeader title="Filmler" />
          <HorizontalRow>
            {pick(ANIME, 7).map((a) => (
              <AnimeCard key={a.slug} anime={a} />
            ))}
          </HorizontalRow>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-6" id="diziler">
          <SectionHeader title="Diziler" />
          <HorizontalRow>
            {pick(ANIME, 7).map((a) => (
              <AnimeCard key={a.slug} anime={a} />
            ))}
          </HorizontalRow>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-6">
          <SectionHeader title="Bugün En İyi 10 Anime" />
          <Top10Row items={top10} />
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10">
          <SectionHeader title="Popüler Animeler" />
          <HorizontalRow>
            {popular.map((a) => (
              <AnimeCard key={a.slug} anime={a} />
            ))}
          </HorizontalRow>
        </section>

        <Footer />
      </main>
    </div>
  );
}
