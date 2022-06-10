import React, { useState } from 'react'
import API from '../api-service'
import useAsync from '../hooks/useAsync'
import Pickups from './Pickups'

export default function OrganizationView({ organizationId }) {

    const getLocations = React.useCallback(() => {
        return API.getLocations(organizationId)
    }, [organizationId])

    const { value: locations } = useAsync(getLocations)

    const [state, setState] = useState({
        datetime: null,

    })

    const handleChange = (e) => {
        setState({ ...state, [e.target.id]: e.target.value })
    }

    return (<div>
        <Pickups organizationId={organizationId} />
        <section>
            <h2>Add Pickup</h2>
            <form>
                <label>
                    Date:
                    <input onChange={handleChange} type="date" id="datetime" />
                </label>
                <br />
                <label>
                    Location :
                    <select>
                    {locations && locations.map(location => <option>{location.name}</option>)}
                    </select>
                </label>
                <br />
                <button>Submit</button>
            </form>
        </section>
    </div>)
}