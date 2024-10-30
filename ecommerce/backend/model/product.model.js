const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema

const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    product_category: {
        type: ObjectId,
        ref: "category",
        required:true
    },
    product_price: {
        type: Number,
        required: true
    },
    product_size: {
        type: String,
    },
    product_color: {
        type: String
    },
    product_description: {
        type: String
    },
    product_tag: {
        type: [String]
    },
    product_stock: {
        type: Number
    },
    sales_date: {
        type: Date
    },
    purchase_date: {
        type: Date
    },
    warrenty_status: {
        type: Boolean
    },
    warrenty_period: {
        type: String
    },
    manu_date: {
        type: Date
    },
    expiry_date: {
        type: Date
    },
    product_discount: {
        discounted_item: Boolean,
        discounted_type: {
            type: String,
            enum: ["percentage", "quantity", "value"]
        },
        discounted_value: {
            type: Number
        }
    },
    product_image:{
        type:[String]
    }
}, {
    timestamps: true
})


const ProductModel = mongoose.model("product", productSchema)

module.exports = ProductModel