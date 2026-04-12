import PostItem from '@components/common/posts/Item.tsx'
import { useState, useEffect } from 'preact/hooks'
import type { Locale } from '@/i18n/locales'
import type { Post } from '@types'

type Props = {
    popular?: boolean
    withPagination?: boolean
    locale: Locale
    labels: {
        loading: string
        previous: string
        next: string
        readMore: string
    }
}

export default function({ popular, withPagination, locale, labels }: Props) {
    const [posts, setValue] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    const url = popular
        ? '/api/posts.json?popular'
        : `/api/posts.json?page=${page}&perPage=5`

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(response => response.json())
            .then(data => setValue(data as Post[]))
            .finally(() => setLoading(false))
    }, [page])

    function renderPagination() {
        return (
            <div className="mt-10 flex w-full justify-center gap-6 text-indigo-600 font-bold text-sm">
                <button 
                    disabled={page === 1} 
                    className="disabled:opacity-30 flex items-center gap-2 hover:gap-3 transition-all" 
                    onClick={() => setPage((current) => current - 1)}
                >
                    ← {labels.previous}
                </button>
                <button 
                    className="flex items-center gap-2 hover:gap-3 transition-all" 
                    onClick={() => setPage((current) => current + 1)}
                >
                    {labels.next} →
                </button>
            </div>
        )
    }
    
    function renderPostItems() {
        return posts.map(post => {
            return (
                <PostItem key={post.id} post={post} locale={locale} readMoreLabel={labels.readMore} />
            )
        })
    }

    return (
        loading
            ? <div>{labels.loading}</div>
            : (
                <div>
                    {renderPostItems()}
                    {withPagination && renderPagination()}
                </div>
            )            
    )
}
