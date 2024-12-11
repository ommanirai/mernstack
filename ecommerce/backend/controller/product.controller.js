const ProductModel = require("./../model/product.model")
const mapProduct = require("./../helpers/mapProduct")

exports.addProduct = (req, res, next) => {
    console.log("file name is: ", req.files)
    if (req.fileTypeError) {
        return next({
            msg: "Invalid File Type",
            status: 404
        })
    }

    var product = new ProductModel()

    if (req.files && req.files.length > 0) {
        req.body.product_image = req.files.map(function (item, index) {
            return item.filename
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

exports.viewProducts = (req, res, next) => {
    ProductModel
        .find()
        .populate("product_category")
        .then(function (products) {
            if (!products) {
                return next({
                    msg: "Products Not Found",
                    status: 404
                })
            }
            res.json(products)
        })
        .catch(function (err) {
            return next(err)
        })
}

exports.productDetails = (req, res, next) => {
    ProductModel
        .findById(req.params.product_id)
        .populate("product_category", {
            // -1
            category_name: 1
        })
        .then(function (product) {
            if (!product) {
                return next({
                    msg: "Product Not Found",
                    status: 404
                })
            }
            res.json(product)
        })
        .catch(function (err) {
            return next(err)
        })
}


exports.deleteProduct = (req, res, next) => {
    ProductModel
        .findByIdAndDelete(req.params.product_id)
        .then(function (product) {
            if (!product) {
                return next({
                    msg: "Product Not Found",
                    status: 404
                })
            }
            res.json({
                msg: "Product Deleted Successfully",
                status: 200,
                deletedProduct: product
            })
        })
        .catch(function (err) {
            return next(err)
        })
}

exports.updateProduct = (req, res, next) => {
    console.log("product: ", req.body, req.files, req.file)
    ProductModel
        .findById(req.params.product_id)
        .then(function (product) {
            if (!product) {
                return next({
                    msg: "Product Not Found",
                    status: 404
                })
            }
            if (product) {
                if (req.fileTypeError) {
                    return next({
                        msg: "Invalid File Type",
                        status: 404
                    })
                }
                if (req.files) {
                    req.body.product_image = req.files.map(function (item, index) {
                        return item.originalname
                    })
                }

                var new_product = mapProduct(product, req.body)

                new_product.save()
                    .then(function (newProduct) {
                        res.json({
                            msg: "Product Updated Successfully",
                            status: 200,
                            newProduct: newProduct
                        })
                    })
                    .catch(function (err) {
                        return next(err)
                    })
            }
        })
        .catch(function (err) {
            return next(err)
        })
}

exports.searchProduct = (req, res, next) => {
    // console.log("product details to search is: ", req.body)
    var searchCondition = {}
    mapProduct(searchCondition, req.body)

    if (req.body.product_color) {
        searchCondition.product_color = req.body.product_color
    }

    if (req.body.minimum_price) {
        searchCondition.product_price = {
            $gte: req.body.minimum_price
        }
    }

    if (req.body.maximum_price) {
        searchCondition.product_price = {
            $lte: req.body.maximum_price
        }
    }

    if (req.body.minimum_price && req.body.maximum_price) {
        searchCondition.product_price = {
            $gte: req.body.minimum_price,
            $lte: req.body.maximum_price
        }
    }

    if (req.body.product_name) {
        searchCondition.product_name = req.body.product_name
    }

    if (req.body.from_date) {
        var fromDate = new Date(req.body.from_date).setHours(0, 0, 0, 0)
        searchCondition.createdAt = {
            $gte: fromDate
        }
    }

    if (req.body.to_date) {
        var todate = new Date(req.body.to_date).setHours(23, 59, 59, 59)
        searchCondition.createdAt = {
            $gte: todate
        }
    }

    if (req.body.from_date && req.body.to_date) {
        var fromDate = new Date(req.body.from_date).setHours(0, 0, 0, 0)
        var todate = new Date(req.body.to_date).setHours(23, 59, 59, 59)

        searchCondition.createdAt = {
            $gte: fromDate,
            $lte: todate
        }
    }

    console.log("search condition is: ", searchCondition)

    ProductModel.find(searchCondition)
        .then(function (products) {
            // console.log("searched product is: ", products)
            if (!products.length > 0) {
                return next({
                    msg: "No any product matched your search condition",
                    status: 404
                })
            }
            if (products) {
                res.json(products)
            }
        })
        .catch(function (err) {
            return next(err)
        })
}