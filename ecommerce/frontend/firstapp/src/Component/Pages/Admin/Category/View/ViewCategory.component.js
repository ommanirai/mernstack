import { useEffect, useState } from "react"
import { httpClient } from "../../../../Utility/httpClient"
import { HandleError } from "../../../../Utility/ErrorHandler"
import { Sidebar } from "../../../../Common/Sidebar/Sidebar.component"

export const ViewCategory = props => {
    const [categories, setCategory] = useState([])

    useEffect(function () {
        httpClient.GET("/category/view", true)
            .then(resposne => {
                setCategory(resposne.data)
                console.log(resposne.data)
            })
            .catch(err => {
                HandleError(err)
            })
    }, [])


    return (
        <>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-9">
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
                                            <i class="bi bi-pencil-square text-info"></i>
                                            <i class="bi bi-trash text-danger"></i>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}