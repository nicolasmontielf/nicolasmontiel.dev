import PostItem from '@components/common/posts/Item.tsx'
import { useState, useEffect } from 'preact/hooks'

type Props = {
    latest?: boolean
    page?: number
    perPage?: number
}

export default function({ latest, page, perPage }: Props) {
    const [posts, setValue] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = latest ? '/api/posts.json?latest' : `/api/posts.json?page=${page}&perPage=${perPage}`

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(response => response.json())
            .then(data => setValue(data))
            .finally(() => setLoading(false))
    }, [])

    return (
        loading
            ? <div>Loading...</div>
            : posts.map(post => {
                return (
                    <div>
                        <hr class="border-zinc-300" />
                        <PostItem post={post} />
                    </div>
                )
            })
    )
}