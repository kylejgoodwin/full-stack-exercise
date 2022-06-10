const BASE_API_URL = "http://localhost:3001/v1"

function request(path,method,body){
    return fetch(BASE_API_URL + path, { method: method || "GET", body: JSON.stringify(body) || null})
        .then(res =>res.json() )
        .then( json => {
            return json;
        })
}


export default class API{
    
    static async getUsers(){
        return request("/users")
    }

    static async getLocations(organizationId){
        return request(`/organization/${organizationId}/locations`)
    }

    static async getPickups(organizationId){
        return request(`/organization/${organizationId}/pickups`)
    }

}