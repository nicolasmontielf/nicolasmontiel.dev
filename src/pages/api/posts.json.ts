import { getMostPopularPosts, getAllPosts } from '@/services/devto.service';

export async function GET({ url }: any) {
    const searchParams = url.searchParams;

    // Most popular posts
    if (searchParams.has('popular')) {
        console.log('Getting popular posts');
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