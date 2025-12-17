export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="h-10 w-64 animate-pulse rounded-xl bg-white/10" />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="aspect-[2/3] animate-pulse rounded-2xl bg-white/10" />
        ))}
      </div>
    </div>
  );
}
