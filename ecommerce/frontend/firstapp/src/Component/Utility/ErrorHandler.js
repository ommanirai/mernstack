import { Notification } from "./toaster"

export const HandleError = error => {
    var errMsg = "Something Went Wrong"
    if (error) {
        if (error.response) {
            if (error.response.data) {
                if (error.response.data.msg) {
                    errMsg = error.response.data.msg
                }
            }
        }
    }
    // if(error && error.response && error.response.data && error.response.data.msg){
    //     errMsg = error.response.data.msg
    // }
    Notification.ShowError(errMsg)
}