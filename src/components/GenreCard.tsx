import { IconCheck } from './Icons';

export function GenreCard({
  label,
  image,
  selected,
  onToggle
}: {
  label: string;
  image: string;
  selected: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={[
        'group relative overflow-hidden rounded-2xl border bg-white/5 text-left',
        'transition hover:scale-[1.02] hover:shadow-[0_25px_70px_rgba(0,0,0,0.65)]',
        selected ? 'border-accent shadow-glow' : 'border-white/10'
      ].join(' ')}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${image}")` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" aria-hidden />

      {selected ? (
        <div className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-accent text-black">
          <IconCheck className="h-5 w-5" />
        </div>
      ) : (
        <div className="absolute right-3 top-3 h-8 w-8 rounded-full bg-black/35 ring-1 ring-white/10" />
      )}

      <div className="relative z-10 flex h-[120px] items-end p-4 md:h-[140px]">
        <div className="text-base font-extrabold tracking-tight text-white">{label}</div>
      </div>
    </button>
  );
}
