import { useEffect, useState } from "react"
import { Button } from "../../../../Common/Button/Button.component"

export const CategoryForm = props => {
    // hooks
    // useState
    // useEffect
    const [formData, setFormData] = useState({
        category_name: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isValidForm, setIsValidForm] = useState(true)

    useEffect(function () {
        // console.log("data is: ", formData)
        if(props.data){
            setFormData({
                category_name: props.data.category_name
            })
        }
    }, [props.data])


    const handleSubmit = event => {
        event.preventDefault()
        props.submitForm(formData)
    }

    const handleChange = event => {
        const { name, value } = event.target;

        setFormData({
            [name]: value
        })
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="categoryname">Category Name</label>
                <input type="text" className="form-control" name="category_name" onChange={handleChange} id="categoryname" value={formData.category_name} />
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