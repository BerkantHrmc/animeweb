'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Logo } from './Logo';
import { IconMenu, IconSearch } from './Icons';
import { avatarDataUri } from '@/lib/placeholders';

export function Navbar({ variant = 'app' }: { variant?: 'app' | 'auth' }) {
  const [open, setOpen] = useState(false);
  const [avatarOpen, setAvatarOpen] = useState(false);
  const avatarRef = useRef<HTMLDivElement | null>(null);

  const links = useMemo(() => {
    if (variant === 'app') {
      return [
        { href: '/dashboard', label: 'Ana Sayfa' },
        { href: '/dashboard#kesfet', label: 'Keşfet' },
        { href: '/dashboard#manga', label: 'Manga' },
        { href: '/dashboard#topluluk', label: 'Topluluk' },
        { href: '/listem', label: 'Listem' }
      ];
    }
    return [
      { href: '/dashboard', label: 'Anasayfa' },
      { href: '/dashboard#kesfet', label: 'Keşfet' },
      { href: '/dashboard#manga', label: 'Manga' },
      { href: '/dashboard#topluluk', label: 'Topluluk' }
    ];
  }, [variant]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setAvatarOpen(false);
    }

    function onPointerDown(e: PointerEvent) {
      const el = avatarRef.current;
      if (!el) return;
      if (el.contains(e.target as Node)) return;
      setAvatarOpen(false);
    }

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Logo />

        <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-white/70 hover:text-white transition"
              >
                {l.label}
              </Link>
            ))}
        </nav>

        <div className="flex items-center gap-2">
          {variant === 'app' ? (
            <>
              <div className="hidden items-center gap-2 md:flex">
                <div className="relative">
                  <input
                    placeholder="Başlık, tür ara..."
                    className="h-10 w-64 rounded-xl border border-white/10 bg-white/5 pl-10 pr-3 text-sm text-white/85 placeholder:text-white/35"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-white/55">
                    <IconSearch className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Avatar + dropdown (demo auth) */}
              <div ref={avatarRef} className="relative">
                <button
                  type="button"
                  onClick={() => setAvatarOpen((v) => !v)}
                  className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-white/12 bg-white/5 hover:bg-white/10 transition"
                  aria-haspopup="menu"
                  aria-expanded={avatarOpen}
                  aria-label="Profil menüsü"
                >
                  <Image
                    src={avatarDataUri('Otaku')}
                    alt="Profil"
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="40px"
                  />
                </button>

                {avatarOpen ? (
                  <div
                    role="menu"
                    className="absolute right-0 top-12 w-64 overflow-hidden rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.65)]"
                  >
                    <div className="px-4 py-3">
                      <div className="text-sm font-extrabold text-white">Otaku</div>
                      <div className="text-xs text-white/55">Demo hesap menüsü</div>
                    </div>
                    <div className="h-px bg-white/10" />

                    <div className="p-2">
                      <Link
                        role="menuitem"
                        href="/login"
                        onClick={() => setAvatarOpen(false)}
                        className="block rounded-xl px-3 py-2 text-sm font-semibold text-white/80 hover:bg-white/10"
                      >
                        Giriş Yap
                      </Link>
                      <Link
                        role="menuitem"
                        href="/register"
                        onClick={() => setAvatarOpen(false)}
                        className="mt-1 block rounded-xl bg-accent px-3 py-2 text-sm font-extrabold text-black"
                      >
                        Kayıt Ol
                      </Link>
                    </div>

                    <div className="h-px bg-white/10" />
                    <div className="p-2">
                      <Link
                        role="menuitem"
                        href="/listem"
                        onClick={() => setAvatarOpen(false)}
                        className="block rounded-xl px-3 py-2 text-sm font-semibold text-white/80 hover:bg-white/10"
                      >
                        Listem
                      </Link>
                      <Link
                        role="menuitem"
                        href="#"
                        onClick={() => setAvatarOpen(false)}
                        className="block rounded-xl px-3 py-2 text-sm font-semibold text-white/80 hover:bg-white/10"
                      >
                        Profil
                      </Link>
                      <Link
                        role="menuitem"
                        href="#"
                        onClick={() => setAvatarOpen(false)}
                        className="block rounded-xl px-3 py-2 text-sm font-semibold text-white/80 hover:bg-white/10"
                      >
                        Ayarlar
                      </Link>
                      <button
                        type="button"
                        onClick={() => setAvatarOpen(false)}
                        className="mt-1 w-full rounded-xl px-3 py-2 text-left text-sm font-semibold text-white/70 hover:bg-white/10"
                        role="menuitem"
                      >
                        Çıkış Yap
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
            </>
          ) : (
            <div className="hidden items-center gap-2 md:flex">
              <Link href="/login" className="rounded-xl px-4 py-2 text-sm font-semibold text-white/80 hover:bg-white/10">
                Giriş Yap
              </Link>
              <Link href="/register" className="rounded-xl bg-accent px-4 py-2 text-sm font-bold text-black">
                Kayıt Ol
              </Link>
            </div>
          )}

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/90 md:hidden"
            aria-label="Menü"
          >
            <IconMenu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/5 bg-black/40 backdrop-blur-xl md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="grid gap-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-white/80 hover:bg-white/10"
                >
                  {l.label}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-semibold text-white/80 hover:bg-white/10"
              >
                Giriş Yap
              </Link>
              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-accent px-3 py-2 text-sm font-bold text-black"
              >
                Kayıt Ol
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
