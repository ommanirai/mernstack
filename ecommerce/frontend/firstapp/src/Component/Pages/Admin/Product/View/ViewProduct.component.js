import { useEffect, useState } from "react"
import { httpClient } from "../../../../Utility/httpClient"
import { HandleError } from "../../../../Utility/ErrorHandler"
import { Sidebar } from "../../../../Common/Sidebar/Sidebar.component"
import { Loader } from "../../../../Common/Loader/Loader.component"
import { Link } from "react-router-dom"

export const ViewProduct = props => {
    const [products, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(function () {
        setIsLoading(true)
        httpClient.GET("/product/view", true)
            .then(resposne => {
                console.log("respone is: ", resposne)
                setProduct(resposne.data)
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


    return (
        <>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    {
                        isLoading
                            ? <Loader />
                            : <>
                                <h1>View Product</h1>
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>sn</th>
                                            <th>Product Name</th>
                                            <th>Product Category</th>
                                            <th>Product Price</th>
                                            <th>Product color</th>
                                            <th>Product Description</th>
                                            <th>Discounted Item</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            products.map((item, index) => {
                                                return <tr key={item._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.product_name}</td>
                                                    <td>{item.product_category.category_name}</td>
                                                    <td>{item.product_price}</td>
                                                    <td>{item.product_color}</td>
                                                    <td>{item.product_description}</td>
                                                    <td>{item.product_discount && item.product_discount.discounted_item && "true"}</td>
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