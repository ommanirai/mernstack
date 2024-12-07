import { useNavigate, useParams } from "react-router-dom"
import { Sidebar } from "../../../../Common/Sidebar/Sidebar.component"
import { httpClient } from "../../../../Utility/httpClient"
import { HandleError } from "../../../../Utility/ErrorHandler"
import { Notification } from "../../../../Utility/toaster"
import { useEffect, useState } from "react"
import { Loader } from "../../../../Common/Loader/Loader.component"

export const DeleteCategory = props => {
    const { category_id } = useParams()
    const navigate = useNavigate()
    const [category, setCategory] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(function () {
        setIsLoading(true)
        httpClient.GET(`/category/categorydetails/${category_id}`, true)
            .then(response => {
                setCategory(response.data)
            })
            .catch(err => {
                HandleError(err)
            })
            .finally(() => {
                setTimeout(() => {
                    setIsLoading(false)
                }, 1000);
            })
    }, [])

    const handleDelete = event => {
        httpClient.DELETE(`/category/deletecategory/${category_id}`, true)
            .then(response => {
                Notification.ShowSuccess(response.data.msg)
                navigate("/category/view")
            })
            .catch(err => {
                HandleError(err)
            })
    }

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
                                <h1>Delete Category</h1>
                                <p>Are you sure you want to delete {category.category_name}? </p>
                                <button onClick={handleDelete}>Delete Category</button>
                            </>
                    }

                </div>
            </div>
        </>
    )
}