import { useNavigate } from "react-router-dom"
import { Sidebar } from "../../../../Common/Sidebar/Sidebar.component"
import { ProductForm } from "../ProductForm/ProductForm.component"
import { httpClient } from "../../../../Utility/httpClient"
import { HandleError } from "../../../../Utility/ErrorHandler"
import { Notification } from "../../../../Utility/toaster"

export const AddProduct = props => {
    const navigate = useNavigate()
    const add = (formData, files) => {
        console.log("data is: ", formData)
        console.log("file is: ", files)
        // httpClient.POST("/product/add", formData, true)
        //     .then(response => {
        //         console.log("response is: ", response)
        //         Notification.ShowSuccess(response.data.msg)
        //         navigate("/product/view")

        //     })
        //     .catch(err => {
        //         console.log("error is: ", err)
        //         HandleError(err)
        //     })
        httpClient.UPLOAD("POST", "/product/add", formData, files)
            .then(response => {
                console.log("response is: ", response)
                Notification.ShowSuccess(response.msg)
                navigate("/product/view")

            })
            .catch(err => {
                console.log("error is: ", err)
                HandleError(err)
            })
    }
    return (
        <>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-8">
                    <h1>Add Product</h1>
                    <div>
                        <ProductForm
                            submitForm={add}
                        >
                        </ProductForm>
                    </div>
                </div>
            </div>
        </>
    )
}