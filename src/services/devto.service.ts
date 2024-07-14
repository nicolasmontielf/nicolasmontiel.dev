import type { Post, PostList } from '@types'
import DEVTO_RESPONSE from '@/data/devto.response.json'

const isDev = import.meta.env.DEV;

export function getLocalPosts(): PostList {
    return DEVTO_RESPONSE;
}
 
export async function getPosts(): Promise<PostList> {
    const response = await fetch('https://www.dev.to/api/articles/me?page=1&per_page=20', {
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

export async function getAllPosts(): Promise<PostList> {
    if (isDev) {
        return getLocalPosts();
    }
    const data = await getPosts();
    return data;
}