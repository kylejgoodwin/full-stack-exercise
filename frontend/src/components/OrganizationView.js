import React, { useState } from 'react'
import API from '../api-service'
import useAsync from '../hooks/useAsync'

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
        <section>
            <h2>Scheduled Pickups</h2>
        </section>
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
                        <option>Location 1</option>
                        <option>Location 2</option>
                        <option>Location 3</option>
                    </select>
                </label>
                <br />
                <button>Submit</button>
            </form>
        </section>
    </div>)
}