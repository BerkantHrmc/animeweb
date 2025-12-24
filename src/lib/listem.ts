export const LIST_KEY = 'anistream:listem:v1';

export function readListem(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(LIST_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((x) => typeof x === 'string');
  } catch {
    return [];
  }
}

export function writeListem(slugs: string[]) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(LIST_KEY, JSON.stringify(slugs));
}

export function toggleListemSlug(current: string[], slug: string) {
  return current.includes(slug) ? current.filter((s) => s !== slug) : [slug, ...current];
}
