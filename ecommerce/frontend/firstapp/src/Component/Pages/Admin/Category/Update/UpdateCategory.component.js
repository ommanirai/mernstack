import { useEffect, useState } from "react"
import { Sidebar } from "../../../../Common/Sidebar/Sidebar.component"
import { CategoryForm } from "../CategoryForm/CategoryForm.component"
import { httpClient } from "../../../../Utility/httpClient"
import { useNavigate, useParams } from "react-router-dom"
import { HandleError } from "../../../../Utility/ErrorHandler"
import { Notification } from "../../../../Utility/toaster"

export const UpdateCategory = props => {
    const [cat, setCat] = useState({})
    const { category_id } = useParams()
    const navigate = useNavigate()

    useEffect(function () {
        console.log("category id is: ", category_id)
        console.log("from category update")
        httpClient.GET(`/category/categorydetails/${category_id}`, true)
            .then(response => {
                console.log("response is: ", response)
                setCat(response.data)
            })
            .catch(err => {
                console.log("erroris: ", err)
                HandleError(err)
            })
    }, [])


    const update = (data) => {
        httpClient.PUT(`/category/updatecategory/${category_id}`, data, true)
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
                <div className="col-md-10">
                    <h1>Update Category</h1>
                    <CategoryForm
                        submitForm={update}
                        enabledLabel="Update Category"
                        disabledLabel="Updating Category"
                        data={cat}
                    >
                    </CategoryForm>
                </div>
            </div>
        </>
    )
}