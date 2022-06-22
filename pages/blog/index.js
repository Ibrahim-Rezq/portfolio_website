import Link from 'next/link'
const index = () => {
    return (
        <div>
            <Link href='/'>
                <a>return Home</a>
            </Link>
            <h1>This is Blog Page</h1>
            <ul>
                <li>
                    <Link href='/blog/1'>
                        <a>Blog 1</a>
                    </Link>
                </li>
                <li>
                    <Link href='/blog/2'>
                        <a>Blog 2</a>
                    </Link>
                </li>
                <li>
                    <Link href='/blog/3'>
                        <a>Blog 3</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default index
