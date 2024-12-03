import { isAuthenticated } from "../../Utility/isAuthenticate"
import "./Navbar.component.css"
import { Link, useNavigate } from "react-router-dom"


// functional component
// named export
export function Navbar(props) {
    // console.log("props in navbar is: ", props)
    const navigate = useNavigate()


    const handleLogout = event => {
        localStorage.clear()
        navigate("/")
    }
    
    return (
        // jsx
        <div>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/product"}>Product</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
                {
                    // props.isLoggedIn
                    isAuthenticated() && isAuthenticated().username
                        ? <li onClick={handleLogout}>
                            Logout
                        </li>
                        : <>
                            {/* empty fragment */}
                            <li> <Link to={"/signin"}>Login</Link> </li>
                            <li> <Link to={"/signup"}>Register</Link> </li>
                        </>
                }
            </ul>
        </div>
    )
}
