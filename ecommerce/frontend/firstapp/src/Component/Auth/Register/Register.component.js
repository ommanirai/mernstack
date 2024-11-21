import React, { Component } from "react";
import { Button } from "../../Common/Button/Button.component";

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
            isValidForm: true
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
            // console.log("state data is: ", this.state.data)
            this.validateForm(name)
        })
    }


    validateForm = fieldName => {
        var errMsg = ""
        switch (fieldName) {
            case "username":
                errMsg = this.state.data[fieldName]
                    ? this.state.data[fieldName].match(/^[a-zA-Z]/)
                        ? this.state.data[fieldName].match(/[0-9]/)
                            ? "username must not contain number"
                            : this.state.data[fieldName].match(/[!@#$%^#&*]/)
                                ? "username must not contain special character"
                                : this.state.data[fieldName].length < 3
                                    ? "username must contain atleast 3 character"
                                    : ""
                        : "username must start with alphabet"
                    : "Required field"
                break;
            case "password":
                errMsg = this.state.data["password"]
                    ? this.state.data[fieldName].match(/[a-z]/)
                        ? this.state.data[fieldName].match(/[A-Z]/)
                            ? this.state.data[fieldName].match(/[0-9]/)
                                ? this.state.data[fieldName].match(/[!@#$%^&*]/)
                                    ? this.state.data[fieldName].length < 8
                                        ? "weak password/password must contain atleast 8 character"
                                        : this.state.data[fieldName].length > 20
                                            ? "password do not exceded 15 character"
                                            : ""
                                    : "password must contain atleast one special character"
                                : "password must contain atleast one number"
                            : "password must contain atleast one uppercase alphabet"
                        : "password must contain atleast one lowercase alphabet"
                    : "required field"
                break;
            case "confirmPassword":
                errMsg = this.state.data[fieldName]
                    ? this.state.data["password"]
                        ? this.state.data[fieldName] === this.state.data["password"]
                            ? ""
                            : "confirm password did not match with password"
                        : this.state.data[fieldName].match(/[a-z]/)
                            ? this.state.data[fieldName].match(/[A-Z]/)
                                ? this.state.data[fieldName].match(/[0-9]/)
                                    ? this.state.data[fieldName].match(/[!@#$%^&*]/)
                                        ? this.state.data[fieldName].length < 8
                                            ? "weak confirm password/confirm password must contain atleast 8 character"
                                            : this.state.data[fieldName].length > 20
                                                ? "confirm password do not exceded 15 character"
                                                : ""
                                        : "confirm password must contain atleast one special character"
                                    : "confirm password must contain atleast one number"
                                : "confirm password must contain atleast one uppercase alphabet"
                            : "confirm password must contain atleast one lowercase alphabet"
                    : "required field"

        }

        this.setState(previousErr => ({
            error: {
                ...previousErr.error,
                [fieldName]: errMsg
            }
        }), () => {
            console.log("error is: ", this.state.error)
            var errors = Object
                .values(this.state.error)
                // .filter(function(err){
                //     if(err){
                //         return err
                //     }
                // })
                .filter(err => err)

            console.log("error values is: ", errors)
            this.setState({
                isValidForm: errors.length === 0 ? true : false
            })
        })

    }


    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            isSubmitting: true
        })

        // data preparation
        // api call
        // send data to server

        setTimeout(() => {
            this.setState({
                isSubmitting: false
            })
        }, 3000);
    }


    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit} className="w-50 shadow-lg p-5 m-auto my-5">
                    <h1>Register</h1>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" onChange={this.handleChange} className="form-control form-control-lg" />
                    <p className="text-danger">{this.state.error.username}</p>

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={this.handleChange} className="form-control form-control-lg" />

                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" name="password" onChange={this.handleChange} className="form-control form-control-lg" />
                    <p className="text-danger">{this.state.error.password}</p>

                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="text" id="confirmPassword" name="confirmPassword" onChange={this.handleChange} className="form-control form-control-lg" />
                    <p className="text-danger">{this.state.error.confirmPassword}</p>

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
                    {/* <button disabled={this.state.isSubmitting} type="submit" value={"Register"} className="btn btn-primary mt-3" >Register</button> */}
                    <Button
                        isSubmitting={this.state.isSubmitting}
                        enabledLabel="Register"
                        disabledLabel="Registering..."
                        isValidForm={this.state.isValidForm}
                    ></Button>
                    <p>Already Have an Account? <a href="#">Login</a> </p>
                </form>
            </>
        )
    }
}