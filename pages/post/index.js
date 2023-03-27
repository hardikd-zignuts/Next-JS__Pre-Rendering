import Link from 'next/link'
import React from 'react'

const Posts = ({ data }) => {
    return (
        <div>
            <h1>Posts Page</h1>
            {
                data.map(item => {
                    return (
                        <>
                            <hr />
                            <h3>{item.title}</h3>
                            <p>{item.body}</p>
                            <Link href={`/post/${item.id}`}><button>View</button></Link>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Posts

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const postData = await res.json()
    return {
        props: {
            data: postData
        }
    }
}