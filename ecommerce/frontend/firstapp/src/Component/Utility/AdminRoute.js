import { Navigate, Outlet } from "react-router-dom"
import { isAuthenticated } from "./isAuthenticate"

export const AdminRoute = props => {
    return (
        <>
            {
                isAuthenticated() && isAuthenticated().role === "admin"
                    ? <Outlet />
                    : <Navigate to={"/signin"} />
            }
        </>
    )
}