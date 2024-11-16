import React, { Component } from "react"

export class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            emailError: "",
            passwordError: "",
            isSubmitting: false
        }
    }

    handleChange = event => {
        // console.log("event is: ", event.target.value)

        // object destruction
        const { name, value } = event.target;
        // console.log("name is: ", name)
        // console.log("value is: ", value)
        this.setState({
            [name]: value
        }, () => {
            console.log("this.state is: ", this.state)
            this.validateForm(name)
        })
    }

    validateForm = fieldName => {
        var errorMsg = ""
        switch (fieldName) {
            case "email":
                errorMsg = this.state[fieldName]
                    ? ""
                    : "Required Field"
                break;
            case "password":
                errorMsg = this.state[fieldName]
                    ? ""
                    : "Required Field"
        }
        var errorField = fieldName + "Error"
        this.setState({
            [errorField]: errorMsg
        }, () => {
            console.log("error in state is: ", this.state)
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            isSubmitting: true
        })
        setTimeout(() => {
            this.setState({
                isSubmitting: false
            })
        }, 3000);
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit} className="w-50 shadow-lg p-5 m-auto">
                    <h1>Login</h1>
                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={this.handleChange} className="form-control form-control-lg mb-2" name="email" id="email" />
                    <p className="text-danger">{this.state.emailError}</p>

                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={this.handleChange} className="form-control form-control-lg mb-2" name="password" id="password" />
                    <p className="text-danger">{this.state.passwordError}</p>

                    <button disabled={this.state.isSubmitting} className="btn btn-primary" type="submit" value="Login">Login</button>
                    <p>Don't Have an Account? <a href="#">Register</a></p>
                </form>
            </>
        )
    }
}