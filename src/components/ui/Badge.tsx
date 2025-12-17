import type { ComponentProps } from 'react';

export function Badge({ className, ...props }: ComponentProps<'span'>) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-white/80',
        className
      ].join(' ')}
      {...props}
    />
  );
}
