'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import type { Anime, CastMember } from '@/lib/mock';
import { AnimeCard } from '@/components/AnimeCard';

type TabKey = 'bolumler' | 'benzerleri' | 'detaylar';

const tabs: { key: TabKey; label: string }[] = [
  { key: 'bolumler', label: 'Bölümler' },
  { key: 'benzerleri', label: 'Benzerleri' },
  { key: 'detaylar', label: 'Detaylar' }
];

function TabButton({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'relative px-3 py-2 text-sm font-extrabold tracking-tight transition',
        active ? 'text-accent' : 'text-white/65 hover:text-white'
      ].join(' ')}
    >
      {children}
      {active ? <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-accent" /> : null}
    </button>
  );
}

export function AnimeDetailClient({
  anime,
  similar,
  cast
}: {
  anime: Anime;
  similar: Anime[];
  cast: CastMember[];
}) {
  const [tab, setTab] = useState<TabKey>('bolumler');

  const episodes = useMemo(
    () =>
      Array.from({ length: 4 }).map((_, i) => ({
        no: i + 1,
        title:
          i === 0
            ? 'Zalimlik'
            : i === 1
              ? 'Eğitmen Urokodaki'
              : i === 2
                ? 'Sabito ve Makomo'
                : 'Son Seçim',
        duration: '24dk',
        progress: i === 1 ? '10:42' : null,
        watched: i === 0
      })),
    []
  );

  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-16 pt-10 lg:grid-cols-[1fr_360px]">
      <div>
        <div className="flex items-center gap-6 border-b border-white/10 pb-3">
          {tabs.map((t) => (
            <TabButton key={t.key} active={tab === t.key} onClick={() => setTab(t.key)}>
              {t.label}
            </TabButton>
          ))}
        </div>

        {tab === 'bolumler' ? (
          <div className="mt-8">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-lg font-extrabold text-white">1. Sezon</div>
              <select className="h-10 rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-white/80">
                <option>1. Sezon (26 Bölüm)</option>
              </select>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {episodes.map((ep) => (
                <Card
                  key={ep.no}
                  className="group overflow-hidden bg-white/4 transition hover:scale-[1.01] hover:shadow-[0_25px_70px_rgba(0,0,0,0.65)]"
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={anime.heroImage}
                      alt={`${anime.title} bölüm ${ep.no}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute left-3 top-3 rounded-xl bg-black/55 px-2 py-1 text-xs font-bold text-white/80 ring-1 ring-white/10">
                      {ep.duration}
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="text-sm font-extrabold text-white">
                      {ep.no}. Bölüm
                    </div>
                    <div className="mt-1 text-sm text-white/70">{ep.title}</div>
                    <div className="mt-2 text-xs text-white/50">
                      {ep.watched ? 'İzlendi' : ep.progress ? `Kaldığın yer: ${ep.progress}` : '—'}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ) : null}

        {tab === 'benzerleri' ? (
          <div className="mt-8">
            <div className="text-lg font-extrabold text-white">{anime.title} Benzeri Animeler</div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {similar.map((a) => (
                <AnimeCard key={a.slug} anime={a} />
              ))}
            </div>
          </div>
        ) : null}

        {tab === 'detaylar' ? (
          <div className="mt-8 grid gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-3">
                <div className="h-8 w-1 rounded-full bg-accent" />
                <div className="text-lg font-extrabold text-white">Anime Künyesi</div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div>
                  <div className="text-xs font-extrabold tracking-[0.2em] text-white/45">ORİJİNAL ADI</div>
                  <div className="mt-1 text-sm font-bold text-white">{anime.title}</div>
                </div>
                <div>
                  <div className="text-xs font-extrabold tracking-[0.2em] text-white/45">İNGİLİZCE ADI</div>
                  <div className="mt-1 text-sm font-bold text-white">{anime.title}</div>
                </div>
                <div>
                  <div className="text-xs font-extrabold tracking-[0.2em] text-white/45">YAYIN TARİHİ</div>
                  <div className="mt-1 text-sm font-bold text-white">{anime.year}</div>
                </div>
                <div>
                  <div className="text-xs font-extrabold tracking-[0.2em] text-white/45">STÜDYO</div>
                  <div className="mt-1 text-sm font-bold text-accent">{anime.studio}</div>
                </div>
                <div>
                  <div className="text-xs font-extrabold tracking-[0.2em] text-white/45">YÖNETMEN</div>
                  <div className="mt-1 text-sm font-bold text-white">{anime.director}</div>
                </div>
                <div>
                  <div className="text-xs font-extrabold tracking-[0.2em] text-white/45">TÜRLER</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {anime.genres.slice(0, 6).map((g) => (
                      <Badge key={g}>{g}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3">
                <div className="h-8 w-1 rounded-full bg-accent" />
                <div className="text-lg font-extrabold text-white">Özet</div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/70">{anime.synopsis}</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3">
                <div className="h-8 w-1 rounded-full bg-accent" />
                <div className="text-lg font-extrabold text-white">Seslendirme Kadrosu</div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {cast.map((m) => (
                  <div
                    key={m.name}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3"
                  >
                    <div className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-white/10">
                      <Image src={m.avatar} alt={m.name} fill className="object-cover" sizes="48px" />
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-white">{m.name}</div>
                      <div className="text-xs text-accent/90">{m.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        ) : null}
      </div>

      <aside className="lg:pt-1">
        <div className="grid gap-4 lg:sticky lg:top-20">
          <Card className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-extrabold text-white">Kullanıcı Puanı</div>
                <div className="text-xs text-white/55">12.5k kişi oyladı</div>
              </div>
              <div className="text-3xl font-extrabold text-accent">{anime.rating.toFixed(1)}</div>
            </div>

            <div className="mt-4 grid gap-2">
              {[5, 4, 3, 2, 1].map((n) => (
                <div key={n} className="flex items-center gap-3">
                  <div className="w-4 text-xs font-bold text-white/60">{n}</div>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${(n / 5) * 90}%`, opacity: 0.65 }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <Button className="mt-5 h-11 w-full" variant="secondary">
              ★ Bu animeyi puanla
            </Button>
          </Card>

          <Card className="p-5">
            <div className="text-sm font-extrabold text-white">Detaylar</div>
            <div className="mt-4 grid gap-3 text-sm">
              <div className="flex items-center justify-between gap-4">
                <div className="text-white/55">Orijinal Adı</div>
                <div className="font-bold text-white">{anime.title}</div>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="text-white/55">Yayın Tarihi</div>
                <div className="font-bold text-white">{anime.year}</div>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="text-white/55">Stüdyo</div>
                <div className="font-bold text-accent">{anime.studio}</div>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="text-white/55">Yönetmen</div>
                <div className="font-bold text-white">{anime.director}</div>
              </div>
            </div>

            <div className="mt-5">
              <div className="text-xs font-extrabold tracking-[0.2em] text-white/45">ETİKETLER</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {anime.genres.slice(0, 6).map((g) => (
                  <Badge key={g}>{g}</Badge>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </aside>
    </div>
  );
}
