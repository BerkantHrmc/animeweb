'use client';

import { useMemo } from 'react';
import { useListem } from '@/components/listem/ListemProvider';
import { ANIME } from '@/lib/mock';
import { AnimeCard } from '@/components/AnimeCard';

export function ListemClient() {
  const { slugs } = useListem();

  const items = useMemo(() => {
    const map = new Map(ANIME.map((a) => [a.slug, a] as const));
    return slugs.map((s) => map.get(s)).filter(Boolean);
  }, [slugs]);

  if (items.length === 0) {
    return (
      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 text-white/70">
        Henüz listene bir şey eklemedin. Kartların üzerindeki <span className="font-extrabold text-accent">+</span>{' '}
        butonuna basarak ekleyebilirsin.
      </div>
    );
  }

  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {items.map((a) => (
        <AnimeCard key={a!.slug} anime={a!} />
      ))}
    </div>
  );
}
