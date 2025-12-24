import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Badge } from '@/components/ui/Badge';
import { LinkButton } from '@/components/ui/Button';
import { IconPlay } from '@/components/Icons';
import { AddToListButton } from '@/components/listem/AddToListButton';
import { ANIME, CAST, getAnimeBySlug, pick } from '@/lib/mock';
import { AnimeDetailClient } from './AnimeDetailClient';

export default async function AnimeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const anime = getAnimeBySlug(slug);
  if (!anime) notFound();

  const similar = pick(ANIME.filter((a) => a.slug !== anime.slug), 6);

  return (
    <div className="min-h-screen">
      <Navbar variant="app" />

      <main className="relative">
        <section className="relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url("${anime.heroImage}")` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-hero-overlay" aria-hidden />
          <div className="absolute inset-0 bg-black/25" aria-hidden />

          <div className="relative mx-auto max-w-6xl px-4 py-14">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-extrabold text-accent ring-1 ring-accent/25">
                TOP 10
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/80 ring-1 ring-white/10">
                {anime.year}
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/80 ring-1 ring-white/10">
                {anime.maturity}
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/80 ring-1 ring-white/10">
                {anime.seasons} Sezon
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-accent ring-1 ring-white/10">
                ★ {anime.rating.toFixed(1)}
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-white md:text-6xl">
              {anime.title}
            </h1>

            <div className="mt-4 flex flex-wrap gap-2">
              {anime.genres.slice(0, 4).map((g) => (
                <Badge key={g}>{g}</Badge>
              ))}
            </div>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
              {anime.synopsis}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="#" size="lg" className="h-12">
                <IconPlay className="h-5 w-5" /> 1. Bölümü Oynat
              </LinkButton>
              <LinkButton href="#" size="lg" variant="secondary" className="h-12">
                Fragman
              </LinkButton>
              <AddToListButton slug={anime.slug} size="lg" className="bg-white/10" />
            </div>

            <div className="mt-10 hidden items-center gap-3 text-xs text-white/55 md:flex">
              <Link href="/dashboard" className="hover:text-white">Ana Sayfa</Link>
              <span>•</span>
              <span className="text-white/75">{anime.title}</span>
            </div>
          </div>
        </section>

        <AnimeDetailClient anime={anime} similar={similar} cast={CAST} />
      </main>
    </div>
  );
}
