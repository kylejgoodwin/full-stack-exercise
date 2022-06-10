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
        location_id: null
    })

    const handleChange = (e) => {
        setState({ ...state, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state)
    }

    return (<div>
        <Pickups organizationId={organizationId} />
        <section>
            <h2>Add Pickup</h2>
            <form onSubmit={handleSubmit}>
                <label>
                   <span>Date :</span> 
                    <input onChange={handleChange} type="date" id="datetime" />
                </label>
                <br />
                <label>
                    <span>Location :</span>
                    <select onChange={handleChange} id="location_id">
                    <option value="none" selected disabled hidden>Select an Option</option>
                    {locations && locations.map(location => <option value={location.id}>{location.name}</option>)}
                    </select>
                </label>
                <br />
                <button disabled={!state.location_id || !state.datetime} >Submit</button>
            </form>
        </section>
    </div>)
}