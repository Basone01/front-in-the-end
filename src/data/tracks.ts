import type { Lang } from '../lib/i18n';

export interface Track {
  id: 'rendering' | 'state' | 'async' | 'thinking';
  title: string;
  tagline: string;
  status: 'live' | 'soon';
  /** Thai title/tagline; falls back to English when absent. */
  titleTh?: string;
  taglineTh?: string;
}

export const tracks: Track[] = [
  {
    id: 'rendering',
    title: 'How we render the web',
    tagline:
      'From plain HTML to SSR and back. Every rendering strategy exists because the previous one hit a wall — feel each wall, and the choice becomes obvious.',
    titleTh: 'เรา render เว็บกันยังไง',
    taglineTh:
      'จาก HTML ล้วน ๆ ไปถึง SSR แล้ววนกลับมา ทุกวิธี render มีอยู่เพราะวิธีก่อนหน้าไปชนกำแพงบางอย่าง — พอรู้สึกถึงกำแพงแต่ละอัน การเลือกก็ชัดเอง',
    status: 'live',
  },
  {
    id: 'state',
    title: 'State & source of truth',
    tagline:
      'Where state lives, what is derived, and why most UI bugs are two copies of the truth disagreeing.',
    titleTh: 'State กับ source of truth',
    taglineTh:
      'state ควรอยู่ที่ไหน อะไรคือค่าที่ derive ได้ และทำไม bug UI ส่วนใหญ่คือความจริงสองชุดที่ขัดกันเอง',
    status: 'live',
  },
  {
    id: 'async',
    title: 'Async & race conditions',
    tagline:
      'Requests finish out of order, users click twice, networks lie. Loading states, cancellation, and optimistic updates done honestly.',
    titleTh: 'Async กับ race condition',
    taglineTh:
      'request จบไม่เรียงลำดับ ผู้ใช้กดซ้ำสองที network ก็โกหก ว่าด้วย loading state, การ cancel และ optimistic update แบบซื่อสัตย์',
    status: 'live',
  },
  {
    id: 'thinking',
    title: 'Thinking in frontend',
    tagline:
      'The skills that survive the next framework: the platform underneath, logic that outlives views, components designed like APIs, and a knowledge portfolio that compounds instead of depreciating.',
    titleTh: 'คิดแบบ frontend',
    taglineTh:
      'ทักษะที่อยู่รอดข้าม framework รุ่นถัดไป: platform ข้างใต้, logic ที่อยู่นานกว่า view, component ที่ออกแบบเหมือน API และคลังความรู้ที่ทบต้นแทนที่จะเสื่อมค่า',
    status: 'live',
  },
];

export function getTrack(id: Track['id']): Track {
  const track = tracks.find((t) => t.id === id);
  if (!track) throw new Error(`Unknown track: ${id}`);
  return track;
}

export function trackTitle(track: Track, lang: Lang): string {
  return lang === 'th' && track.titleTh ? track.titleTh : track.title;
}
export function trackTagline(track: Track, lang: Lang): string {
  return lang === 'th' && track.taglineTh ? track.taglineTh : track.tagline;
}
