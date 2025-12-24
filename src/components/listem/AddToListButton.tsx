'use client';

import { useListem } from './ListemProvider';

export function AddToListButton({
  slug,
  size = 'md',
  className
}: {
  slug: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const { has, toggle } = useListem();
  const added = has(slug);

  const dims = size === 'sm' ? 'h-8 w-8' : size === 'lg' ? 'h-12 w-12' : 'h-10 w-10';
  const text = size === 'lg' ? 'text-xl' : 'text-lg';

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(slug);
      }}
      className={[
        'grid place-items-center rounded-xl border border-white/10 bg-white/10 text-white/90',
        'hover:bg-white/15 hover:border-white/15 transition active:scale-[0.98]',
        added ? 'ring-1 ring-accent/40 shadow-[0_0_0_2px_rgba(255,193,7,0.12)]' : '',
        dims,
        className
      ].join(' ')}
      aria-label={added ? 'Listemden çıkar' : 'Listeme ekle'}
      title={added ? 'Listemden çıkar' : 'Listeme ekle'}
    >
      <span className={[text, 'font-extrabold leading-none'].join(' ')}>{added ? '✓' : '+'}</span>
    </button>
  );
}
