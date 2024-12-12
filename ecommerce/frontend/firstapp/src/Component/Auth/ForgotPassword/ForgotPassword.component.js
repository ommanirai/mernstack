import { useState } from "react"
import { Button } from "../../Common/Button/Button.component"
import { httpClient } from "../../Utility/httpClient"
import { HandleError } from "../../Utility/ErrorHandler"
import { Notification } from "../../Utility/toaster"

export const ForgotPassword = props => {
    const [formData, setFormData] = useState({
        email: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isValidForm, setIsValidForm] = useState(true)

    const handleChange = event => {
        const { name, value } = event.target;
        setFormData({
            [name]: value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        httpClient.POST("/auth/forgot-password", formData)
            .then(res => {
                Notification.ShowSuccess(res.data.msg)
            })
            .catch(err => {
                HandleError(err)
            })
    }


    return (
        <>
            <form onSubmit={handleSubmit} className="w-50 shadow-lg p-5 m-auto my-5">
                <h1>Forgot Password</h1>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={handleChange} className="form-control form-control-lg" />


                <Button
                    isSubmitting={isSubmitting}
                    enabledLabel=""
                    disabledLabel="..."
                    isValidForm={isValidForm}
                ></Button>
            </form>
        </>
    )
}