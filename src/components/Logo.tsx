import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/dashboard" className="flex items-center gap-2 text-white">
      <div className="grid h-8 w-8 place-items-center rounded-xl bg-accent/15 ring-1 ring-accent/35">
        <div className="h-3.5 w-3.5 rounded-full bg-accent" />
      </div>
      <span className="text-lg font-extrabold tracking-tight">AniStream</span>
    </Link>
  );
}
