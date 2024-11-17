import React, { Component } from "react";

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

export class Register extends Component {
    constructor() {
        super()
        this.state = {
            data: {
                // spread
                ...formData
            },
            error: {
                ...formData
            },
            isSubmitting: false,
            isValidForm: false
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        // this.setState({
        //     data: {
        //         [name]: value
        //     }
        // }, ()=>{
        //     console.log("this.state.data is: ", this.state.data)
        // })
        this.setState(previousState => ({
            data: {
                ...previousState.data,
                [name]: value
            }
        }), () => {
            console.log("state data is: ", this.state.data)
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            isSubmitting: true
        })
    }


    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit} className="w-50 shadow-lg p-5 m-auto my-5">
                    <h1>Register</h1>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" onChange={this.handleChange} className="form-control form-control-lg" />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={this.handleChange} className="form-control form-control-lg" />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={this.handleChange} className="form-control form-control-lg" />

                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" onChange={this.handleChange} className="form-control form-control-lg" />

                    <label htmlFor="phone">Phone</label>
                    <input type="number" id="phone" name="phone" onChange={this.handleChange} className="form-control form-control-lg" />

                    <label htmlFor="date_of_birth">Date Of Birth</label>
                    <input type="date" id="date_of_birth" name="date_of_birth" onChange={this.handleChange} className="form-control form-control-lg" />

                    <label htmlFor="permanent_address">Permanent Address</label>
                    <input type="text" id="permanent_address" name="permanent_address" onChange={this.handleChange} className="form-control form-control-lg" />

                    <label htmlFor="temporary_address">Temporary Address</label>
                    <input type="text" id="temporary_address" name="temporary_address" onChange={this.handleChange} className="form-control form-control-lg" />

                    <label htmlFor="gender">Gender</label>
                    <select id="gender" name="gender" onChange={this.handleChange} className="form-control form-control-lg">
                        <option value={""}>Choose Your Gender</option>
                        <option value={"male"}>Male</option>
                        <option value={"female"}>Female</option>
                        <option value={"others"}>Others</option>
                    </select>
                    <button type="submit" value={"Register"} className="btn btn-primary mt-3" >Register</button>
                </form>
            </>
        )
    }
}