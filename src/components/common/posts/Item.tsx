import EyeIcon from '@assets/icons/eye.svg';
import HeartIcon from '@assets/icons/heart.svg';
import type { Post } from '@types'

type Props = {
    post: Post
}

function formatDate(date: string) {
    return new Date(date).toLocaleDateString();
}

function formatNumber(value: number) {
    return value.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function renderStats(icon: string, value: number) {
    return (
        <>
            <img src={icon} alt="" />
            { formatNumber(value) }
        </>
    )
}

function renderTags(tags: string[]) {
    return tags.map((tag: string) => <span class="text-xs text-rose-700 opacity-95 uppercase">{tag}</span>)
}

export default function({ post }: Props) {
    return (
        <div class="py-7 flex flex-col">
            <div class="mb-3">
                <div class="flex justify-between">

                    <p class="text-sm">
                        { formatDate(post.published_at) }
                    </p>

                    <div class="gap-3 flex">
                        <span class="flex gap-1">
                            { renderStats(EyeIcon.src, post.page_views_count) } 
                        </span>
                        <span class="flex gap-1">
                            { renderStats(HeartIcon.src, post.public_reactions_count) } 
                        </span>
                    </div>

                </div>
                
                <h4 class="text-white text-2xl my-1">
                    { post.title }
                </h4>
                
                <div class="flex gap-3">
                    { renderTags(post.tag_list) }
                </div>
            </div>

            <div class="mb-7">
                {post.description}
            </div>

            <div>
                <a
                    class="text-rose-700"
                    href={post.url}
                    target="_blank"
                >
                    Read more →
                </a>
            </div>
        </div>
    )
}