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
            <div className="mt-5 -full justify-center flex gap-3 text-rose-800">
                <button onClick={() => setPage((current) => current - 1)}>← Previous</button>
                <button onClick={() => setPage((current) => current + 1)}>Next →</button>
            </div>
        )
    }
    
    function renderPostItems() {
        return posts.map(post => {
            return (
                <div>
                    <hr class="border-zinc-300" />
                    <PostItem post={post} />
                </div>
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