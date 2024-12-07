import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Signin } from "./Component/Auth/Login/Signin.component"
import { Signup } from "./Component/Auth/Register/Signup.component"
import { Navbar } from "./Component/Common/Navbar/Navbar.component"
import { Dashboard } from "./Component/Pages/Admin/Dashboard/Dashboard"
import { AddCategory } from "./Component/Pages/Admin/Category/Add/Addcategory.component"
import { ViewCategory } from "./Component/Pages/Admin/Category/View/ViewCategory.component"
import { UpdateCategory } from "./Component/Pages/Admin/Category/Update/UpdateCategory.component"
import { DeleteCategory } from "./Component/Pages/Admin/Category/Delete/DeleteCategory.component"
import { AddProduct } from "./Component/Pages/Admin/Product/Add/AddProduct.component"
import { ViewProduct } from "./Component/Pages/Admin/Product/View/ViewProduct.component"

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
                    <Route path="/admin/dashbaord" element={<Dashboard/>}/>
                    <Route path="/cateogory/add" element={<AddCategory/>}/>
                    <Route path="/category/view" element={<ViewCategory/>}/>
                    <Route path="/category/update/:category_id" element={<UpdateCategory/>}/>
                    <Route path="/category/delete/:category_id" element={<DeleteCategory/>}/>

                    <Route path="/product/add" element={<AddProduct/>}/>
                    <Route path="/product/view" element={<ViewProduct/>}/>
                    <Route path="*" element={<PageNotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}