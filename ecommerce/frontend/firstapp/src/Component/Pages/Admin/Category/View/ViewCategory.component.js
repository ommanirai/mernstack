import { useEffect, useState } from "react"
import { httpClient } from "../../../../Utility/httpClient"
import { HandleError } from "../../../../Utility/ErrorHandler"
import { Sidebar } from "../../../../Common/Sidebar/Sidebar.component"
import { Link } from "react-router-dom"
import { Loader } from "../../../../Common/Loader/Loader.component"

export const ViewCategory = props => {
    const [categories, setCategory] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(function () {
        setIsLoading(true)
        httpClient.GET("/category/view", true)
            .then(resposne => {
                setCategory(resposne.data)
                console.log(resposne.data)
            })
            .catch(err => {
                HandleError(err)
            })
            .finally(() => {
                setTimeout(() => {
                    setIsLoading(false)
                }, 2000);
            })
    }, [])


    return (
        <>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    {
                        isLoading
                            ? <Loader/>
                            : <>
                                <h1>View Category</h1>
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>sn</th>
                                            <th>Category Name</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            categories.map((item, index) => {
                                                return <tr key={item._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.category_name}</td>
                                                    <td>
                                                        <Link to={`/category/update/${item._id}`}><i className="bi bi-pencil-square text-info"></i></Link>
                                                        <Link to={`/category/delete/${item._id}`} ><i className="bi bi-trash text-danger"></i></Link>
                                                    </td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </>
                    }
                </div>
            </div>
        </>
    )
}