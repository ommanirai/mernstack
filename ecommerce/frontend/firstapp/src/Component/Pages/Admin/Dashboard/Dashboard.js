import { Sidebar } from "../../../Common/Sidebar/Sidebar.component"

export const Dashboard = props =>{
    return(
        <div className="row">
            <div className="col-md-2">
                <Sidebar/>
            </div>
            <div className="col-md-10">
                <h1>Admin Main Page</h1>
            </div>
        </div>
    )
}