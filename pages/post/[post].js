import React from 'react'

const PostView = ({ data }) => {
    return (
        <div>
            <h1> Hello - {data.id}</h1>
            <h3>Title: {data.title}</h3>
            <p> Body:{data.body}</p>
        </div>
    )
}

export default PostView

export async function getStaticPaths() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    const data = await res.json()
    const paths = data.map(item => ({
        params: { post: (item.id).toString() }
    }))
    return {
        paths: paths,
        fallback: false
    }
}
export async function getStaticProps(ctx) {
    const { params } = ctx
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.post}`)
    const data = await res.json()
    return {
        props: {
            data: data
        }
    }
}