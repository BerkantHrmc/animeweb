import Link from 'next/link';

export function SectionHeader({
  title,
  actionLabel,
  actionHref
}: {
  title: string;
  actionLabel?: string;
  actionHref?: string;
}) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <h2 className="text-xl font-extrabold tracking-tight text-white md:text-2xl">{title}</h2>
      {actionLabel && actionHref ? (
        <Link href={actionHref} className="text-sm font-semibold text-accent hover:opacity-90">
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
}
