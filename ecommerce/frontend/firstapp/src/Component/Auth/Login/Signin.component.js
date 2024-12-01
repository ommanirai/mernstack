import { useEffect, useState } from "react"
import { Button } from "../../Common/Button/Button.component"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { Notification } from "../../Utility/toaster"
import { HandleError } from "../../Utility/ErrorHandler"

export const Signin = props => {
    const formData = {
        email: "",
        password: "",
    }

    const BaseURL = "http://localhost:8000"
    // hooks
    // useState
    // useEffect
    const [data, setData] = useState(formData)
    const [error, setError] = useState(formData)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isValidForm, setIsValidForm] = useState(true)
    const navigate = useNavigate()

    // re-render
    useEffect(() => {
        console.log("data is: ", data)
    })
    // dependency list
    const handleChange = event => {
        const { name, value } = event.target;
        // console.log("name is: ", name)
        // console.log("value is: ", value)
        setData(previousState => ({
            ...previousState,
            [name]: value
        }))
        // console.log(data)
    }

    const handleSubmit = event => {
        event.preventDefault()
        setIsSubmitting(true)
        axios.post(`${BaseURL}/auth/login`, data, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                console.log("response is: ", response.data)
                navigate("/")
                Notification.ShowSuccess(response.data.msg)
            })
            .catch(err => {
                setTimeout(() => {
                    setIsSubmitting(false)
                }, 3000);
                console.log("error is: ", err)
                // Notification.ShowError(err.response.data.msg)
                HandleError(err)
            })
    }


    return (
        <>
            <form onSubmit={handleSubmit} className="w-50 shadow-lg p-5 m-auto my-5">
                <h1>Sign in</h1>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={handleChange} className="form-control form-control-lg" />

                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password" onChange={handleChange} className="form-control form-control-lg" />


                <Button
                    isSubmitting={isSubmitting}
                    enabledLabel="Signin"
                    disabledLabel="Signin Running..."
                    isValidForm={isValidForm}
                ></Button>
                <p>Don't Have an Account? <Link to={"/signup"} className="text-primary">Sign up</Link> </p>
            </form>
        </>
    )
}