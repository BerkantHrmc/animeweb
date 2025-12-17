import Link from 'next/link';
import type { ComponentProps } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

type Props = {
  variant?: Variant;
  size?: 'sm' | 'md' | 'lg';
} & Omit<ComponentProps<'button'>, 'className'> & {
    className?: string;
  };

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-black shadow-[0_10px_30px_rgba(255,193,7,0.12)] hover:shadow-[0_18px_45px_rgba(255,193,7,0.18)]',
  secondary:
    'bg-white/10 text-white border border-white/10 hover:bg-white/12 hover:border-white/15',
  ghost: 'bg-transparent text-white/85 hover:bg-white/10'
};

const sizes = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base'
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: Props) {
  return <button className={[base, variants[variant], sizes[size], className].join(' ')} {...props} />;
}

type LinkButtonProps = {
  href: string;
  variant?: Variant;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
};

export function LinkButton({ href, variant = 'primary', size = 'md', className, children }: LinkButtonProps) {
  return (
    <Link href={href} className={[base, variants[variant], sizes[size], className].join(' ')}>
      {children}
    </Link>
  );
}
