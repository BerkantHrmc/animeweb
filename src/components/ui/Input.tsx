import type { ComponentProps } from 'react';

type Props = ComponentProps<'input'> & {
  rightSlot?: React.ReactNode;
};

export function Input({ className, rightSlot, ...props }: Props) {
  return (
    <div className="relative">
      <input
        className={[
          'h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white/90 placeholder:text-white/35',
          'transition focus:border-accent/60 focus:bg-white/7',
          rightSlot ? 'pr-11' : '',
          className
        ].join(' ')}
        {...props}
      />
      {rightSlot ? (
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-white/55">
          {rightSlot}
        </div>
      ) : null}
    </div>
  );
}
