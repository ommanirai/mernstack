import { useEffect, useState } from "react"
import { Button } from "../../../../Common/Button/Button.component"
import { httpClient } from "../../../../Utility/httpClient"
import { HandleError } from "../../../../Utility/ErrorHandler"

export const ProductForm = props => {
    const [formData, setFormData] = useState({
        product_name: "",
        product_category: "",
        product_price: "",
        product_size: "",
        product_color: "",
        product_description: "",
        product_tag: "",
        product_stock: "",
        sales_date: "",
        purchase_date: "",
        warrenty_status: false,
        warrenty_period: "",
        manu_date: "",
        expiry_date: "",
        discounted_item: false,
        discounted_type: "",
        discounted_value: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isValidForm, setIsValidForm] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const [category, setCategory] = useState([])

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
                }, 1000);
            })
    }, [])


    // useEffect(function () {
    //     if(props.data){
    //         setFormData({
    //             category_name: props.data.category_name
    //         })
    //     }
    // }, [props.data])


    const handleSubmit = event => {
        event.preventDefault()
        props.submitForm(formData)
    }

    const handleChange = event => {
        const { name, value, checked, type } = event.target;
        console.log("type is: ", type)
        console.log("checked is: ", checked)

        if (type === "checkbox") {
            setFormData(prevState => ({
                ...prevState,
                [name]: checked
            }))
        }
        else {
            setFormData(previousState => ({
                ...previousState,
                [name]: value
            }))
        }
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="product_name">product_name</label>
                <input type="text" className="form-control mb-3" name="product_name" onChange={handleChange} id="product_name" value={formData.product_name} />

                <label htmlFor="product_category">product_category</label>
                <select type="text" className="form-control mb-3" name="product_category" onChange={handleChange} id="product_category" value={formData.category_name}>
                    <option value={''}>Choose Category</option>
                    {
                        category && category.map((item, index) => {
                            return <option key={index} value={item._id}>{item.category_name}</option>
                        })
                    }
                </select>

                <label htmlFor="product_price">product_price</label>
                <input type="text" className="form-control mb-3" name="product_price" onChange={handleChange} id="product_price" value={formData.product_price} />

                <label htmlFor="product_size">product_size</label>
                <input type="text" className="form-control mb-3" name="product_size" onChange={handleChange} id="product_size" value={formData.product_size} />

                <label htmlFor="product_color">product_color</label>
                <input type="text" className="form-control mb-3" name="product_color" onChange={handleChange} id="product_color" value={formData.product_color} />

                <label htmlFor="product_description">product_description</label>
                <input type="text" className="form-control mb-3" name="product_description" onChange={handleChange} id="product_description" value={formData.product_description} />

                <label htmlFor="product_tag">product_tag</label>
                <input type="text" className="form-control mb-3" name="product_tag" onChange={handleChange} id="product_tag" value={formData.product_tag} />
                <label htmlFor="product_stock">product_stock</label>
                <input type="text" className="form-control mb-3" name="product_stock" onChange={handleChange} id="product_stock" value={formData.product_stock} />

                <label htmlFor="sales_date">sales_date</label>
                <input type="date" className="form-control mb-3" name="sales_date" onChange={handleChange} id="sales_date" value={formData.sales_date} />

                <label htmlFor="purchase_date">purchase_date</label>
                <input type="date" className="form-control mb-3" name="purchase_date" onChange={handleChange} id="purchase_date" value={formData.purchase_date} />

                <label htmlFor="manu_date">manu_date</label>
                <input type="date" className="form-control mb-3" name="manu_date" onChange={handleChange} id="manu_date" value={formData.manu_date} />

                <label htmlFor="expiry_date">expiry_date</label>
                <input type="date" className="form-control mb-3" name="expiry_date" onChange={handleChange} id="expiry_date" value={formData.expiry_date} />

                <input type="checkbox" className="me-2" name="warrenty_status" onChange={handleChange} id="warrenty_status" />
                <label htmlFor="warrenty_status">warrenty_status</label>
                <br />
                {
                    formData.warrenty_status &&
                    <>
                        <label htmlFor="warrenty_period">warrenty_period</label>
                        <input type="text" className="form-control mb-3" name="warrenty_period" onChange={handleChange} id="warrenty_period" value={formData.warrenty_period} />
                    </>
                }

                <input type="checkbox" className="me-2" name="discounted_item" onChange={handleChange} id="discounted_item" />
                <label htmlFor="discounted_item">discounted_item</label>
                <br />

                {
                    formData.discounted_item &&
                    <>
                        <label htmlFor="discounted_type">discounted_type</label>
                        <select type="text" className="form-control mb-3" name="discounted_type" onChange={handleChange} id="discounted_type" value={formData.discounted_type} >
                            <option value={""}>Choose Discounted Type</option>
                            <option value={"percentage"}>percentage</option>
                            <option value={"quantity"}>quantity</option>
                            <option value={"value"}>value</option>
                        </select>

                        <label htmlFor="discounted_value">discounted_value</label>
                        <input type="text" className="form-control mb-3" name="discounted_value" onChange={handleChange} id="discounted_value" value={formData.discounted_value} />
                    </>
                }


                <Button
                    enabledLabel={props.enabledLabel || "Submit"}
                    disabledLabel={props.disabledLabel || "Submitting"}
                    isSubmitting={isSubmitting}
                    isValidForm={isValidForm}
                ></Button>
            </form>
        </>
    )
}