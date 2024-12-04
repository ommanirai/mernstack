import { useNavigate } from "react-router-dom"
import { Sidebar } from "../../../../Common/Sidebar/Sidebar.component"
import { HandleError } from "../../../../Utility/ErrorHandler"
import { httpClient } from "../../../../Utility/httpClient"
import { Notification } from "../../../../Utility/toaster"
import { CategoryForm } from "../CategoryForm/CategoryForm.component"

export const AddCategory = props => {
    const navigate = useNavigate()
    const add = formData => {
        httpClient.POST("/category/addcategory", formData, true)
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
                    <h1>Add Category</h1>
                    <CategoryForm
                        submitForm={add}
                    >
                    </CategoryForm>
                </div>
            </div>
        </>
    )
}