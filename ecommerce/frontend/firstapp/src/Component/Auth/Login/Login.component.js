import React, { Component } from "react"

export class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
    }
    render() {
        return (
            <>
                <form>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />

                    <button type="submit" value="Login">Login</button>
                </form>
            </>
        )
    }
}