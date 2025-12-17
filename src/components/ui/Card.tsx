import type { ComponentProps } from 'react';

export function Card({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={[
        'rounded-2xl border border-white/10 bg-card backdrop-blur-xl',
        'shadow-[0_20px_60px_rgba(0,0,0,0.55)]',
        className
      ].join(' ')}
      {...props}
    />
  );
}
