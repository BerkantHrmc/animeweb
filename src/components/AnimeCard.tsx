import Image from 'next/image';
import Link from 'next/link';
import type { Anime } from '@/lib/mock';

export function AnimeCard({ anime, compact }: { anime: Anime; compact?: boolean }) {
  return (
    <Link
      href={`/anime/${anime.slug}`}
      className={[
        'group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5',
        'transition hover:scale-[1.02] hover:shadow-[0_25px_70px_rgba(0,0,0,0.65)]',
        compact ? 'w-[160px]' : 'w-[190px]'
      ].join(' ')}
    >
      <div className={compact ? 'aspect-[2/3]' : 'aspect-[2/3]'}>
        <Image
          src={anime.posterImage}
          alt={anime.title}
          fill
          unoptimized={anime.posterImage.startsWith('data:')}
          className="object-cover"
          sizes="(max-width: 768px) 160px, 190px"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90" />
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <div className="text-sm font-bold leading-tight text-white">{anime.title}</div>
        <div className="mt-1 text-xs text-white/70">
          {anime.year} • {anime.genres.slice(0, 2).join(' • ')}
        </div>
      </div>
      <div className="absolute right-2 top-2 rounded-full bg-black/55 px-2 py-1 text-xs font-bold text-accent ring-1 ring-white/10">
        ★ {anime.rating.toFixed(1)}
      </div>
    </Link>
  );
}
