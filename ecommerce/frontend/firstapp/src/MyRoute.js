import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Signin } from "./Component/Auth/Login/Signin.component"
import { Signup } from "./Component/Auth/Register/Signup.component"
import { Navbar } from "./Component/Common/Navbar/Navbar.component"

const Home = props => {
    return <h1>Home Page</h1>
}

const Product = props => {
    return <h1>Product Page</h1>
}

const Contact = props => {
    return <h1>Contact Page</h1>
}
const PageNotFound = props => {
    return (
        <div className="text-center mt-5">
            <img src={"https://imgs.search.brave.com/u9dskmEiXZNkXtB-RGbjW3qNzlY4frp5tTCgs_hQNOk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC81NC80MC80/MDQtcGFnZS1ub3Qt/Zm91bmQtdmVjdG9y/LTExNzI1NDQwLmpw/Zw"} width={"400px"} height={"400px"} />
            <h1>Page Not Found</h1>
            <a href={"/"} className="text-primary">go to home page</a>
        </div>
    )
}

export const MyRoute = props => {
    return (
        <>
            <BrowserRouter>
                <Navbar isLoggedIn={false}></Navbar>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/product" element={<Product />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/signin" element={<Signin />}></Route>
                    <Route path="/signup" element={<Signup />} ></Route>
                    <Route path="*" element={<PageNotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}