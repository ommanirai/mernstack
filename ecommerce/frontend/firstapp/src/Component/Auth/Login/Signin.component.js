import { useEffect, useState } from "react"
import { Button } from "../../Common/Button/Button.component"
import { Link } from "react-router-dom"

export const Signin = props => {
    const formData = {
        email: "",
        password: "",
    }
    // hooks
    // useState
    // useEffect
    const [data, setData] = useState(formData)
    const [error, setError] = useState(formData)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isValidForm, setIsValidForm] = useState(true)

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
        setTimeout(() => {
            setIsSubmitting(false)
        }, 3000);
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