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
            <span className="text-sm">{ formatNumber(value) }</span>
        </>
    )
}

function renderTags(tags: string[]) {
    return tags.map((tag: string) => <span class="px-2 py-0.5 rounded text-[10px] bg-slate-100 text-slate-600 font-bold uppercase tracking-wider">{tag}</span>)
}

export default function({ post }: Props) {
    return (
        <article class="py-8 group border-b border-slate-100 last:border-0">
            <div class="mb-4">
                <div class="flex justify-between items-center mb-2">
                    <time class="text-sm font-medium text-slate-500">
                        { formatDate(post.published_at) }
                    </time>

                    <div class="flex items-center gap-4 text-slate-400">
                        <span class="flex items-center gap-1.5 grayscale opacity-60">
                            { renderStats(EyeIcon.src, post.page_views_count) } 
                        </span>
                        <span class="flex items-center gap-1.5 grayscale opacity-60">
                            { renderStats(HeartIcon.src, post.public_reactions_count) } 
                        </span>
                    </div>
                </div>
                
                <h4 class="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-3 leading-tight">
                    <a href={post.url} target="_blank">{ post.title }</a>
                </h4>
                
                <div class="flex flex-wrap gap-2">
                    { renderTags(post.tag_list) }
                </div>
            </div>

            <p class="text-slate-600 mb-6 leading-relaxed">
                {post.description}
            </p>

            <div>
                <a
                    class="text-indigo-600 font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                    href={post.url}
                    target="_blank"
                >
                    Read more <span>→</span>
                </a>
            </div>
        </article>
    )
}