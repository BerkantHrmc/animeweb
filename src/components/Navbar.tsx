'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { Logo } from './Logo';
import { IconMenu, IconSearch } from './Icons';
import { avatarDataUri } from '@/lib/placeholders';

export function Navbar({ variant = 'app' }: { variant?: 'app' | 'auth' }) {
  const [open, setOpen] = useState(false);

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

              {/* Auth actions always visible (mobile + desktop) */}
              <div className="hidden items-center gap-2 sm:flex">
                <Link
                  href="/login"
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-white/80 hover:bg-white/10"
                >
                  Giriş Yap
                </Link>
                <Link
                  href="/register"
                  className="rounded-xl bg-accent px-3 py-2 text-sm font-bold text-black"
                >
                  Kayıt Ol
                </Link>
              </div>

              {/* Avatar (demo) */}
              <div className="hidden md:block">
                <div className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-white/10 bg-white/5">
                  <Image
                    src={avatarDataUri('Otaku')}
                    alt="Profil"
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="36px"
                  />
                </div>
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

          {/* Mobile quick CTA when variant=app */}
          {variant === 'app' ? (
            <>
              <Link
                href="/login"
                className="sm:hidden rounded-xl px-3 py-2 text-sm font-semibold text-white/80 hover:bg-white/10"
              >
                Giriş
              </Link>
              <Link
                href="/register"
                className="sm:hidden rounded-xl bg-accent px-3 py-2 text-sm font-bold text-black"
              >
                Kayıt Ol
              </Link>
            </>
          ) : null}

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
