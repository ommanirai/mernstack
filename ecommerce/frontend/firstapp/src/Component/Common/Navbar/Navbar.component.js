import "./Navbar.component.css"
import { Link } from "react-router-dom"

// functional component
// named export
export function Navbar(props) {
    // console.log("props in navbar is: ", props)
    return (
        // jsx
        <div>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/product"}>Product</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
                {
                    props.isLoggedIn
                        ? <li>Logout</li>
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
