import React, { useEffect } from 'react'

export default function UserList() {

    useEffect(() => {
        fetch("http://localhost:3001/v1/users")
        .then( res => res.json())
        .then( json => {
            console.log(json)
        })
    }, [])

    return (
        <div>
            <p>Test</p>
        </div>
    )
}