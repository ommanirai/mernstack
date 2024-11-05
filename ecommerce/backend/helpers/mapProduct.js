module.exports = function (product, reqData) {
    if (reqData.product_name) {
        product.product_name = reqData.product_name
    }

    if (reqData.product_category) {
        product.product_category = reqData.product_category
    }

    if (reqData.product_price) {
        product.product_price = reqData.product_price
    }

    if (reqData.product_size) {
        product.product_size = reqData.product_size
    }

    if (reqData.product_color) {
        product.product_color = reqData.product_color
    }

    if (reqData.product_description) {
        product.product_description = reqData.product_description
    }

    if (reqData.product_tag) {
        product.product_tag = reqData.product_tag
    }

    if (reqData.product_stock) {
        product.product_stock = reqData.product_stock
    }

    if (reqData.sales_date) {
        product.sales_date = reqData.sales_date
    }

    if (reqData.purchase_date) {
        product.purchase_date = reqData.purchase_date
    }

    if (reqData.warrenty_status) {
        product.warrenty_status = reqData.warrenty_status
    }

    if (reqData.warrenty_period) {
        product.warrenty_period = reqData.warrenty_period
    }

    if (reqData.manu_date) {
        product.manu_date = reqData.manu_date
    }

    if (reqData.expiry_date) {
        product.expiry_date = reqData.expiry_date
    }

    if (reqData.product_image) {
        product.product_image = reqData.product_image
    }

    if (reqData.discounted_item || reqData.discounted_type || reqData.discounted_value) {
        if (!product.product_discount) {
            product.product_discount = {}
        }

        if (reqData.discounted_item) {
            product.product_discount.discounted_item = reqData.discounted_item
        }

        if (reqData.discounted_type) {
            product.product_discount.discounted_type = reqData.discounted_type
        }

        if (reqData.discounted_value) {
            product.product_discount.discounted_value = reqData.discounted_value
        }
    }
    return product;
}