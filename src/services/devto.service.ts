import type { Post, PostList } from '@types'
import DEVTO_RESPONSE from '@/data/devto.response.json'

const isDev = import.meta.env.DEV;
// const isDev = false;

export function getLocalPosts(): PostList {
    return DEVTO_RESPONSE;
}
 
export async function getPosts(page: number = 1, perPage: number = 20): Promise<PostList> {
    const response = await fetch(`https://www.dev.to/api/articles/me?page=${page}&per_page=${perPage}`, {
        headers: {
            'api-key': import.meta.env.DEVTO_APIKEY
        },
    });
    const data = await response.json();
    return data;
}

export async function getMostPopularPosts(): Promise<PostList> {
    if (isDev) {
        return getLocalPosts();
    }
    const data = await getPosts();
    return data.sort((a: Post, b: Post) =>  b.page_views_count - a.page_views_count).slice(0, 5);
}

export async function getAllPosts(page?: number, perPage?: number): Promise<PostList> {
    if (isDev) {
        return getLocalPosts();
    }
    return await getPosts(page, perPage);
}