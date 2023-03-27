import React from 'react'

const NewsCategoryList = ({ category, filterPost }) => {
    return (
        <div>
            <h2>Post for Category {category}</h2>

            {
                filterPost.map(item => {
                    return (
                        <div key={item.id}>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <button>{item.category}</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default NewsCategoryList

export async function getServerSideProps(context) {
    const category = context.query.category
    const res = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await res.json()
    return {
        props: {
            filterPost: data,
            category
        }
    }
}