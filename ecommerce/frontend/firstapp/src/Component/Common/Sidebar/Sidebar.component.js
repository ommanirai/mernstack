import { Link } from "react-router-dom"

export const Sidebar = props => {
    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark" style={{ height: "700px" }}>
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    {/* <svg className="bi pe-none me-2" width="40" height="32"><use xlink:to="#bootstrap" /></svg> */}
                    <span className="fs-4">Admin Dashboard</span>
                </Link>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto bg-dark">
                    <li>
                        <Link to="/cateogory/add" className="nav-link text-white">
                            {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#table" /></svg> */}
                            Category Add
                        </Link>
                    </li>
                    <li>
                        <Link to="/category/view" className="nav-link text-white">
                            {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#grid" /></svg> */}
                            Category View
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/product/add" className="nav-link text-white" aria-current="page">
                            {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#home" /></svg> */}
                            Product Add
                        </Link>
                    </li>
                    <li>
                        <Link to="/product/view" className="nav-link text-white">
                            {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#speedometer2" /></svg> */}
                            Product View
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/dashboard/product/product_search" className="nav-link text-white">
                            {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#speedometer2" /></svg> */}
                            Product Search
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link text-white">
                            {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#people-circle" /></svg> */}
                            Users
                        </Link>
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong>mdo</strong>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><Link className="dropdown-item" to="#">New project...</Link></li>
                        <li><Link className="dropdown-item" to="#">Settings</Link></li>
                        <li><Link className="dropdown-item" to="#">Profile</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to="#">Sign out</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}