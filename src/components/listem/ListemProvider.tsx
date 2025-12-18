'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { readListem, toggleListemSlug, writeListem } from '@/lib/listem';

type Ctx = {
  slugs: string[];
  has: (slug: string) => boolean;
  toggle: (slug: string) => void;
  count: number;
};

const ListemContext = createContext<Ctx | null>(null);

export function ListemProvider({ children }: { children: React.ReactNode }) {
  const [slugs, setSlugs] = useState<string[]>([]);

  useEffect(() => {
    setSlugs(readListem());
  }, []);

  const value = useMemo<Ctx>(() => {
    return {
      slugs,
      count: slugs.length,
      has: (slug) => slugs.includes(slug),
      toggle: (slug) => {
        setSlugs((prev) => {
          const next = toggleListemSlug(prev, slug);
          writeListem(next);
          return next;
        });
      }
    };
  }, [slugs]);

  return <ListemContext.Provider value={value}>{children}</ListemContext.Provider>;
}

export function useListem() {
  const ctx = useContext(ListemContext);
  if (!ctx) {
    return {
      slugs: [] as string[],
      count: 0,
      has: () => false,
      toggle: () => {}
    };
  }
  return ctx;
}
