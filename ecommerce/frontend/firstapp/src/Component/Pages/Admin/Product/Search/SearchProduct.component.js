import { useEffect, useState } from "react"
import { Button } from "../../../../Common/Button/Button.component"
import { Sidebar } from "../../../../Common/Sidebar/Sidebar.component"
import { httpClient } from "../../../../Utility/httpClient"
import { HandleError } from "../../../../Utility/ErrorHandler"
import { ViewProduct } from "../View/ViewProduct.component"

export const SearchProduct = props => {
    const [formData, setFormData] = useState({
        product_name: "",
        minimum_price: "",
        maximum_price: "",
        product_size: "",
        product_color: "",
        from_date: "",
        to_date: "",
        warrenty_status: false,
        warrenty_period: "",
        manu_date: "",
        expiry_date: "",
        discounted_item: false,
        discounted_type: "",
        discounted_value: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isValidForm, setIsValidForm] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [searchResult, setSearchResult] = useState([])

    // useEffect(function () {
    //     httpClient.POST("/product/search", {}, true)
    //         .then(response => {
    //             // console.log("response of search product is: ", response)
    //             setSearchResult(response.data)
    //         })
    //         .catch(err => {
    //             HandleError(err)
    //         })
    // }, [])


    const handleChange = event => {
        const { name, value } = event.target;
        setFormData(previousState => ({
            ...previousState,
            [name]: value
        }))
    }

    const handleSubmit = event => {
        event.preventDefault()
        httpClient.POST("/product/search", formData, true)
            .then(response => {
                console.log("response of search product after button click is: ", response)
                setSearchResult(response.data)
            })
            .catch(err => {
                console.log("error is: ", err)
                HandleError(err)
            })
    }

    const searchAgain = (event) => {
        setSearchResult([])
    }

    return (
        <>
            {
                searchResult && searchResult.length > 0
                    ? <ViewProduct
                        searchResult={searchResult}
                        searchAgain={searchAgain}
                    ></ViewProduct>
                    : <div className="row mb-5">
                        <div className="col-md-2">
                            <Sidebar />
                        </div>
                        <div className="col-md-8">
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <h1>Advance Search</h1>
                                    <label htmlFor="product_name">product_name</label>
                                    <input type="text" className="form-control mb-3" name="product_name" onChange={handleChange} id="product_name" />

                                    <label htmlFor="minimum_price">Minimum Price</label>
                                    <input type="text" className="form-control mb-3" name="minimum_price" onChange={handleChange} id="minimum_price" />

                                    <label htmlFor="maximum_price">Maximum Price</label>
                                    <input type="text" className="form-control mb-3" name="maximum_price" onChange={handleChange} id="maximum_price" />

                                    <label htmlFor="product_size">product_size</label>
                                    <input type="text" className="form-control mb-3" name="product_size" onChange={handleChange} id="product_size" />

                                    <label htmlFor="product_color">product_color</label>
                                    <input type="text" className="form-control mb-3" name="product_color" onChange={handleChange} id="product_color" />



                                    <label htmlFor="from_date">from_date</label>
                                    <input type="date" className="form-control mb-3" name="from_date" onChange={handleChange} id="from_date" />

                                    <label htmlFor="to_date">to_date</label>
                                    <input type="date" className="form-control mb-3" name="to_date" onChange={handleChange} id="to_date" />

                                    <label htmlFor="manu_date">manu_date</label>
                                    <input type="date" className="form-control mb-3" name="manu_date" onChange={handleChange} id="manu_date" />

                                    <label htmlFor="expiry_date">expiry_date</label>
                                    <input type="date" className="form-control mb-3" name="expiry_date" onChange={handleChange} id="expiry_date" />

                                    <Button
                                        enabledLabel={"search"}
                                        disabledLabel={"Searching"}
                                        isSubmitting={isSubmitting}
                                        isValidForm={isValidForm}
                                    ></Button>
                                </form>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}