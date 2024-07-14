import type { APIRoute } from 'astro';
import { getMostPopularPosts, getAllPosts } from '@/services/devto.service';

export async function GET({ url }: any) {
    const searchParams = url.searchParams;

    // Latest posts
    if (searchParams.has('latest')) {
        console.log('Getting latest posts');
        const posts = await getMostPopularPosts();
        return new Response(JSON.stringify(posts), {
            status: 200,
        });
    }

    // All posts by page
    console.log(`Getting posts for page ${searchParams.get('page')} and perPage ${searchParams.get('perPage')}`);
    const posts = await getAllPosts(searchParams.get('page'), searchParams.get('perPage'));
    return new Response(JSON.stringify(posts), {
        status: 200,
    });
}