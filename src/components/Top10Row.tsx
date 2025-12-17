import Image from 'next/image';
import Link from 'next/link';
import type { Anime } from '@/lib/mock';

export function Top10Row({ items }: { items: Anime[] }) {
  return (
    <div className="-mx-4 overflow-x-auto px-4">
      <div className="flex gap-6 pb-3">
        {items.map((anime, idx) => (
          <Link
            key={anime.slug}
            href={`/anime/${anime.slug}`}
            className="group relative w-[260px] shrink-0"
          >
            <div className="relative h-[170px] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="absolute -left-2 -top-10 select-none text-[140px] font-extrabold leading-none text-white/10">
                {idx + 1}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
              <div className="absolute right-0 top-0 h-full w-[120px]">
                <Image src={anime.posterImage} alt={anime.title} fill className="object-cover" sizes="120px" />
              </div>
              <div className="relative z-10 p-4">
                <div className="inline-flex items-center gap-2">
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent ring-1 ring-accent/25">
                    TOP {idx + 1}
                  </span>
                  <span className="text-xs text-white/60">★ {anime.rating.toFixed(1)}</span>
                </div>
                <div className="mt-3 text-lg font-extrabold tracking-tight text-white group-hover:text-white">
                  {anime.title}
                </div>
                <div className="mt-1 text-xs text-white/65">
                  {anime.year} • {anime.genres.slice(0, 2).join(' • ')}
                </div>
              </div>
            </div>
            <div className="mt-2 text-xs text-white/55">Bugünün en iyileri</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
