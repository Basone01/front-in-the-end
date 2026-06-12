import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const lessons = await getCollection('lessons', ({ data }) => !data.draft);
  return rss({
    title: 'Front in the End',
    description: 'Lessons in thinking like a frontend engineer.',
    site: context.site!,
    items: lessons
      .sort((a, b) => a.data.order - b.data.order)
      .map((lesson) => ({
        title: lesson.data.title,
        description: lesson.data.description,
        link: `/lessons/${lesson.id}/`,
      })),
  });
}
