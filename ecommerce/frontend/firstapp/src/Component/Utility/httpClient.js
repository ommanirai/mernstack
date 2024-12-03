import axios from "axios";
import { isAuthenticated } from "./isAuthenticate";
// import { HandleError } from "./ErrorHandler";

const baseUrl = "http://localhost:8000"

const myAxios = axios.create({
    baseURL: baseUrl
})

const getHeader = (isSecured) => {
    let options = {
        "Content-Type": "application/json"
    }
    if (isSecured) {
        options["Authorization"] = isAuthenticated() && isAuthenticated().tokens
    }
    return options
}

const PUT = (url, data, isSecured = false) => {
    return myAxios.put(url, data, {
        headers: getHeader(isSecured)
    })
}

const DELETE = (url, isSecured = false) => {
    return myAxios.delete(url, {
        headers: getHeader(isSecured)
    })
}

const GET = (url, isSecured = false) => {
    return myAxios.get(url, {
        headers: getHeader(isSecured)
    })
}

const POST = (url, data, isSecured = false) => {
    return myAxios.post(url, data, {
        headers: getHeader(isSecured)
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