import { marked } from 'marked';
import { turso } from '@/lib/turso';
import type { TiendapyPost, TiendapyPostList } from '@types';

type RawTiendapyPost = {
	id: number;
	slug: string;
	title: string;
	excerpt: string | null;
	content_markdown: string;
	published_at: string;
	tags: string | null;
};

function normalizeTags(rawTags: string | null) {
	if (!rawTags) return [];
	return rawTags
		.split(',')
		.map(tag => tag.trim())
		.filter(Boolean);
}

function calculateReadingTimeMinutes(markdown: string) {
	const words = markdown.trim().split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.ceil(words / 200));
}

function mapPost(row: RawTiendapyPost): TiendapyPost {
	const tags = normalizeTags(row.tags);
	return {
		id: row.id,
		slug: row.slug,
		title: row.title,
		excerpt: row.excerpt ?? '',
		content_markdown: row.content_markdown,
		published_at: row.published_at,
		tags,
		reading_time_minutes: calculateReadingTimeMinutes(row.content_markdown),
	};
}

export async function getTiendapyPosts(options?: { limit?: number }): Promise<TiendapyPostList> {
	const limit = options?.limit ?? 10;
	const result = await turso.execute({
		sql: `
			select
				id,
				slug,
				title,
				excerpt,
				content_markdown,
				published_at,
				tags
			from tiendapy_posts
			order by published_at desc
			limit ?
		`,
		args: [limit],
	});

	return result.rows.map(row => mapPost(row as unknown as RawTiendapyPost));
}

export async function getTiendapyPostBySlug(slug: string): Promise<TiendapyPost | null> {
	const result = await turso.execute({
		sql: `
			select
				id,
				slug,
				title,
				excerpt,
				content_markdown,
				published_at,
				tags
			from tiendapy_posts
			where slug = ?
			limit 1
		`,
		args: [slug],
	});

	if (result.rows.length === 0) {
		return null;
	}

	return mapPost(result.rows[0] as unknown as RawTiendapyPost);
}

export async function renderMarkdown(markdown: string) {
	return marked.parse(markdown);
}
