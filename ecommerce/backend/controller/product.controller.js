const ProductModel = require("./../model/product.model")
const mapProduct = require("./../helpers/mapProduct")

exports.addProduct = (req, res, next) => {

    if (req.fileTypeError) {
        return next({
            msg: "Invalid File Type",
            status: 404
        })
    }

    var product = new ProductModel()

    if (req.files && req.files.length > 0) {
        req.body.product_image = req.files.map(function (item, index) {
            return item.originalname
        })
    }

    var new_product = mapProduct(product, req.body)


    new_product.save()
        .then(function (newProduct) {
            res.json({
                msg: "New Product Added Successfully",
                status: 200,
                newProduct: newProduct
            })
        })
        .catch(function (err) {
            return next(err)
        })
}