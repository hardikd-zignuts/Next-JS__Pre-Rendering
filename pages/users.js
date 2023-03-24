import User from '@/components/User';
import axios from 'axios';
import React from 'react'

const users = ({ users }) => {
    return (
        <div>
            {users &&
                users.map((item) => {
                    return <User key={item.id} user={item} />;
                })}
        </div>
    )
}

export default users

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await response.json()
    return {
        props: {
            users: data,
        },
    }
}

