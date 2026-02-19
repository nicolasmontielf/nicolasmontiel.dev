import PostItem from '@components/common/posts/Item.tsx'
import { useState, useEffect } from 'preact/hooks'

type Props = {
    popular?: boolean
    withPagination?: boolean
}

export default function({ popular, withPagination }: Props) {
    const [posts, setValue] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    const url = popular
        ? '/api/posts.json?popular'
        : `/api/posts.json?page=${page}&perPage=5`

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(response => response.json())
            .then(data => setValue(data))
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
                    ← Previous
                </button>
                <button 
                    className="flex items-center gap-2 hover:gap-3 transition-all" 
                    onClick={() => setPage((current) => current + 1)}
                >
                    Next →
                </button>
            </div>
        )
    }
    
    function renderPostItems() {
        return posts.map(post => {
            return (
                <PostItem post={post} />
            )
        })
    }

    return (
        loading
            ? <div>Loading...</div>
            : (
                <div>
                    {renderPostItems()}
                    {withPagination && renderPagination()}
                </div>
            )            
    )
}