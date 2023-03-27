import { useRouter } from 'next/router'
import React from 'react'

const PostView = ({ data }) => {
    const router = useRouter()
    if (router.isFallback) {
        return <h1>Loading....</h1>
    }
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
        fallback: true
    }
}
export async function getStaticProps(ctx) {
    const { params } = ctx
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.post}`)
    const data = await res.json()
    return {
        props: {
            data: data
        },
        revalidate: 10 //get updated data and rebuild after 10 seconds
    }
}
// -----------------------------------------------------

// getStaticPaths fallback: false
//     The false value is most suitable if you have an application with a small number of paths to pre
//     render.
//     When new pages are not added often.
//     A blog site with a few articles is a good example for fallback set to false

// -----------------------------------------------------

// getStaticPaths fallback: true
// 1. The paths returned from getStaticPaths will be rendered to HTML at build time by
// getStaticProps.
// 2. The paths that have not been generated at build time will not result in a 404 page.Instead,
//     Next.js will serve a "fallback" version of the page on the first request to such a path.
// 3. In the background, Next.js will statically generate the requested path HTML and JSON.This
// includes running getStaticProps.
// 4. When that's done, the browser receives the JSON for the generated path. This will be used to
// automatically render the page with the required props.From the user's perspective, the page
// will be swapped from the fallback page to the full page.
// 5. At the same time, Next.js keeps track of the new list of pre - rendered pages.Subsequent
// requests to the same path will serve the generated page, just like other pages pre - rendered at
// build time.

// -----------------------------------------------------

// getStaticPaths fallback: 'blocking'
// 1. The paths returned from getStaticPaths will be rendered to HTML at build time by
// getStaticProps.
// 2. The paths that have not been generated at build time will not result in a 404 page.Instead, on
// the first request, Next.js will render the page on the server and return the generated HTML.
// 3. When that's done, the browser receives the HTML for the generated path. From the user's
// perspective, it will transition from "the browser is requesting the page" to "the full page is
// loaded". There is no flash of loading/fallback state.
// 4..At the same time, Next.js keeps track of the new list of pre - rendered pages.Subsequent
// requests to the same path will serve the generated page, just like other pages pre - rendered at
// build time.