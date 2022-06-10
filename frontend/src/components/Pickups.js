import React, { useState } from 'react'
import API from '../api-service'
import useAsync from '../hooks/useAsync'

export default function Pickups({ organizationId }) {

    const getPickups = React.useCallback(() => {
        return API.getPickups(organizationId)
    }, [organizationId])

    const { value: pickups } = useAsync(getPickups)

    return <section>
        <h2>View Pickups</h2>
        {pickups && pickups.map(each => {
            return <div>
                {each.datetime}
                {each.location_id}
            </div>
        })}
    </section>
}