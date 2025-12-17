'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/Button';
import { GENRES } from '@/lib/mock';
import { GenreCard } from '@/components/GenreCard';

export default function OnboardingPage() {
  const [selected, setSelected] = useState<string[]>(['aksiyon', 'fantastik', 'bilim-kurgu']);

  const selectedCount = selected.length;

  const canContinue = selectedCount >= 3;

  const footerText = useMemo(() => {
    if (selectedCount === 0) return 'Başlamak için tür seçin.';
    if (selectedCount < 3) return `${selectedCount} seçildi • En az 3 tür seçmelisin.`;
    return `${selectedCount} seçildi • Harika bir başlangıç!`;
  }, [selectedCount]);

  return (
    <div className="min-h-screen">
      <Navbar variant="app" />

      <main className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(255,193,7,0.10),transparent_55%),linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.85))]" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-10">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-extrabold tracking-[0.25em] text-accent/85">KİŞİSELLEŞTİRME</div>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                Ne izlemek istersin?
              </h1>
              <p className="mt-3 max-w-2xl text-white/60">
                Mükemmel öneri kütüphaneni oluşturmamıza yardımcı olmak için en az 3 tür seç.
              </p>
            </div>

            <Link
              href="/dashboard"
              className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 hover:bg-white/10 md:flex"
            >
              Şimdilik geç →
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {GENRES.map((g) => {
              const isSelected = selected.includes(g.id);
              return (
                <GenreCard
                  key={g.id}
                  label={g.label}
                  image={g.image}
                  selected={isSelected}
                  onToggle={() =>
                    setSelected((prev) =>
                      prev.includes(g.id) ? prev.filter((x) => x !== g.id) : [...prev, g.id]
                    )
                  }
                />
              );
            })}
          </div>
        </div>

        <div className="sticky bottom-0 border-t border-white/5 bg-black/35 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <div>
              <div className="text-sm font-bold text-white">{footerText}</div>
              <div className="text-xs text-white/55">Seçimlerini dilediğin zaman değiştirebilirsin.</div>
            </div>
            <Link href="/dashboard" className={canContinue ? '' : 'pointer-events-none'}>
              <Button className={canContinue ? 'h-11' : 'h-11 opacity-50'}>Devam Et</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
