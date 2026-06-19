export interface Track {
  id: 'rendering' | 'state' | 'async' | 'thinking';
  title: string;
  tagline: string;
  status: 'live' | 'soon';
}

export const tracks: Track[] = [
  {
    id: 'rendering',
    title: 'How we render the web',
    tagline:
      'From plain HTML to SSR and back. Every rendering strategy exists because the previous one hit a wall — feel each wall, and the choice becomes obvious.',
    status: 'live',
  },
  {
    id: 'state',
    title: 'State & source of truth',
    tagline:
      'Where state lives, what is derived, and why most UI bugs are two copies of the truth disagreeing.',
    status: 'live',
  },
  {
    id: 'async',
    title: 'Async & race conditions',
    tagline:
      'Requests finish out of order, users click twice, networks lie. Loading states, cancellation, and optimistic updates done honestly.',
    status: 'live',
  },
  {
    id: 'thinking',
    title: 'Thinking in frontend',
    tagline:
      'The skills that survive the next framework: the platform underneath, logic that outlives views, components designed like APIs, and a knowledge portfolio that compounds instead of depreciating.',
    status: 'live',
  },
];

export function getTrack(id: Track['id']): Track {
  const track = tracks.find((t) => t.id === id);
  if (!track) throw new Error(`Unknown track: ${id}`);
  return track;
}
