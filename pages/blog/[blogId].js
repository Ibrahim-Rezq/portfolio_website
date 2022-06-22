import Link from 'next/link'
import { useRouter } from 'next/router'
const First = () => {
    const {
        query: { blogId },
    } = useRouter()

    return (
        <div>
            <Link href='/blog'>
                <a>got to blogs</a>
            </Link>
            <h1>
                This is Blog Num
                {blogId}
            </h1>
        </div>
    )
}

export default First
