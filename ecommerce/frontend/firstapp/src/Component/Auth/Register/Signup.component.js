import { useEffect, useState } from "react"
import { Button } from "../../Common/Button/Button.component"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import toast from 'react-hot-toast'

export const Signup = props => {
    const BaseURL = "http://localhost:8000"
    const formData = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        temporary_address: "",
        permanent_address: "",
        date_of_birth: "",
        gender: ""
    }
    // hooks
    // useState
    // useEffect
    const [data, setData] = useState(formData)
    const [error, setError] = useState(formData)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isValidForm, setIsValidForm] = useState(true)
    const navigate = useNavigate()

    // re-render
    // useEffect(() => {
    //     console.log("data is: ", data)
    // })
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

        axios.post(`${BaseURL}/auth/signup`, data, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                console.log("response is: ", response)
                navigate("/signin")
                toast.success(response.data.msg)
            })
            .catch(err => {
                setTimeout(() => {
                    setIsSubmitting(false)
                }, 3000);
                console.log("error is: ", err.response)
                toast.error(err.response.data.msg)
            })
    }


    return (
        <>
            <form onSubmit={handleSubmit} className="w-50 shadow-lg p-5 m-auto my-5">
                <h1>Sign up</h1>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" onChange={handleChange} className="form-control form-control-lg" />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={handleChange} className="form-control form-control-lg" />

                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password" onChange={handleChange} className="form-control form-control-lg" />

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="text" id="confirmPassword" name="confirmPassword" onChange={handleChange} className="form-control form-control-lg" />

                <label htmlFor="phone">Phone</label>
                <input type="number" id="phone" name="phone" onChange={handleChange} className="form-control form-control-lg" />

                <label htmlFor="date_of_birth">Date Of Birth</label>
                <input type="date" id="date_of_birth" name="date_of_birth" onChange={handleChange} className="form-control form-control-lg" />

                <label htmlFor="permanent_address">Permanent Address</label>
                <input type="text" id="permanent_address" name="permanent_address" onChange={handleChange} className="form-control form-control-lg" />

                <label htmlFor="temporary_address">Temporary Address</label>
                <input type="text" id="temporary_address" name="temporary_address" onChange={handleChange} className="form-control form-control-lg" />

                <label htmlFor="gender">Gender</label>
                <select id="gender" name="gender" onChange={handleChange} className="form-control form-control-lg">
                    <option value={""}>Choose Your Gender</option>
                    <option value={"male"}>Male</option>
                    <option value={"female"}>Female</option>
                    <option value={"others"}>Others</option>
                </select>
                {/* <button disabled={this.state.isSubmitting} type="submit" value={"Register"} className="btn btn-primary mt-3" >Register</button> */}
                <Button
                    isSubmitting={isSubmitting}
                    enabledLabel="Signup"
                    disabledLabel="Signup Running..."
                    isValidForm={isValidForm}
                ></Button>
                <p>Already Have an Account? <Link to={"/signin"} className="text-primary">Sign in</Link> </p>
            </form>
        </>
    )
}