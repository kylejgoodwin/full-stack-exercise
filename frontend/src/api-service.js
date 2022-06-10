const BASE_API_URL = "http://localhost:3001/v1"

// function request(path,method,body){
//     return fetch()
// }


export default class API{
    static async getUsers(){
        return fetch(BASE_API_URL + "/users")
        .then(res =>res.json() )
        .then( json => {
            return json;
        })
    }
}