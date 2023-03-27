import React from 'react'

const NewsList = ({ postData }) => {
    return (
        <div>
            <h1>News Articles</h1>
            {
                postData.map(item => {
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

export default NewsList


export async function getServerSideProps() {
    const res = await fetch('http://localhost:4000/news')
    const data = await res.json()
    return {
        props: {
            postData: data
        }
    }
}