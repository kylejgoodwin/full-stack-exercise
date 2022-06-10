import React, { useState } from 'react'
import API from '../api-service'
import useAsync from '../hooks/useAsync'
import { DateTime } from 'luxon'

export default function Pickups({ organizationId }) {

    const getPickups = React.useCallback(() => {
        return API.getPickups(organizationId)
    }, [organizationId])

    const { value: pickups } = useAsync(getPickups)

    return <section>
        <h2>View Pickups</h2>
        {pickups && pickups.map(each => {
            return <div key={`pickup-${each.id}`} className='pickup'>
                <p>
                    Pickup Id: {each.id}
                </p>
                <p>
                    Pickup Date:  {DateTime.fromISO(each.datetime).toLocaleString(DateTime.DATE_SHORT)}
                </p>
                <p>
                    Location:  {each.location.name}
                </p>
                <p>
                    Address:  {each.location.address}
                </p>
            </div>
        })}
    </section>
}