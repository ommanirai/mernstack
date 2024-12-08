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


const UPLOAD = (method, url, data, files = []) => {
    var uploadtoken = isAuthenticated() && isAuthenticated().tokens
    const xhr = new XMLHttpRequest()
    const formData = new FormData()

    // if (data) {
    for (var items in data) {
        formData.append(items, data[items])
    }
    // }

    // if (files) {
    if (files.length > 0) {
        files.forEach((item, index) => {
            formData.append("img", files[index])
        })
    }
    // }
    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                console.log("req-res cycle complete")
                if (xhr.status == 200) {
                    console.log("success in file upload")
                    resolve(xhr.response)
                }
                else {
                    console.log("fail in file upload")
                    reject(xhr.response)
                }
            }
        }
        xhr.open(method, `${baseUrl}${url}?token=${uploadtoken}`, true)
        xhr.send(formData)
    })
}




export const httpClient = {
    POST,
    GET,
    PUT,
    DELETE,
    UPLOAD
}