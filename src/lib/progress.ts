// Client-side reading progress, stored in localStorage. No accounts, no
// backend — the whole feature is a JSON array of lesson ids.

const KEY = 'fite:read';

export function getRead(): string[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(KEY) ?? '[]');
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === 'string') : [];
  } catch {
    return [];
  }
}

export function isRead(id: string): boolean {
  return getRead().includes(id);
}

export function setRead(id: string, read: boolean): void {
  const current = new Set(getRead());
  if (read) current.add(id);
  else current.delete(id);
  localStorage.setItem(KEY, JSON.stringify([...current]));
}
