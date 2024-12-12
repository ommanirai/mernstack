import { useState } from "react"
import { Button } from "../../Common/Button/Button.component"

export const ResetPassword = props => {
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isValidForm, setIsValidForm] = useState(true)

    const handleChange = event => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = event => {
        event.preventDefault()
    }


    return (
        <>
            <form onSubmit={handleSubmit} className="w-50 shadow-lg p-5 m-auto my-5">
                <h1>Reset Password</h1>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={handleChange} className="form-control form-control-lg" />

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="confirmPassword" id="confirmPassword" name="confirmPassword" onChange={handleChange} className="form-control form-control-lg" />


                <Button
                    isSubmitting={isSubmitting}
                    enabledLabel="Reset Password"
                    disabledLabel="...Resetting Password"
                    isValidForm={isValidForm}
                ></Button>
            </form>
        </>
    )
}