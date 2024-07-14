export interface Post {
    id: number
    title: string
    description: string
    published_at: string
    url: string
    comments_count: number
    public_reactions_count: number
    page_views_count: number
    tag_list: string[]
    reading_time_minutes: number
}

export type PostList = Post[]