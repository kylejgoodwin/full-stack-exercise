import React, { useEffect } from 'react'
import API from '../api-service'
import useAsync from '../hooks/useAsync'
import { DateTime } from 'luxon'

export default function Pickups({ organizationId, refresh }) {

    const getPickups = React.useCallback(() => {
        return API.getPickups(organizationId)
    }, [organizationId])

    const { value: pickups, execute } = useAsync(getPickups)

    useEffect(() => {
        if (refresh) execute();
    }, [refresh])

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
                <p>
                    Current Status:  {each.pickup_statuses[0].status}
                </p>
            </div>
        })}
    </section>
}