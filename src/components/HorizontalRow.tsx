import type { ReactNode } from 'react';

export function HorizontalRow({ children }: { children: ReactNode }) {
  return (
    <div className="-mx-4 overflow-x-auto px-4">
      <div className="flex gap-4 pb-2">{children}</div>
    </div>
  );
}
