import React, { useEffect } from 'react'
import useAsync from '../hooks/useAsync'
import API from '../api-service'

export default function UserList({ setOrganizationId }) {

    const { execute, status, error, value } = useAsync(API.getUsers);


    return (
        <div>
            {status === "success" && <>
            <h2>Select a user</h2>
            <div>{value && value.map(each => {

                const { organization_id, name } = each;

                const handleClick = () => {
                    setOrganizationId(organization_id)
                }

                return <button onClick={handleClick} className='user-select'>{name}</button>
            })}</div>
            </>}
            {status === "error" && <p> There was an error fetching the list of patients</p>}
        </div>
    )
}