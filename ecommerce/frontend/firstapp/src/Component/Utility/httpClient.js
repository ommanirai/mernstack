import axios from "axios";
// import { HandleError } from "./ErrorHandler";

const baseUrl = "http://localhost:8000"

const myAxios = axios.create({
    baseURL: baseUrl
})

const getHeader = () => {
    let options = {
        "Content-Type": "application/json"
    }
    return options
}

const PUT = (url, data) => {
    return myAxios.put(url, data, {
        headers: getHeader()
    })
}

const DELETE = (url, params) => {
    return myAxios.delete(url, {
        headers: getHeader()
    })
}

const GET = (url, params) => {
    return myAxios.get(url, {
        headers: getHeader()
    })
}

const POST = (url, data) => {
    return myAxios.post(url, data, {
        headers: getHeader()
    })
}

// return new Promise(function (resolve, reject) {
//     myAxios.post(url, data, {
//         headers: getHeader()
//     })
//         .then(function (done) {
//             resolve(done)
//         })
//         .catch(function (err) {
//             // HandleError(err)
//             reject(err)
//         })
// })
// }


export const httpClient = {
    POST,
    GET,
    PUT,
    DELETE
}