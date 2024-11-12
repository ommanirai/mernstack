// const app = require("express")
// const router = app.Router()

const { addProduct, viewProducts, productDetails, deleteProduct, updateProduct } = require("../controller/product.controller")
const upload = require("./../middleware/upload")
const router = require("express").Router()

router.post("/add", upload.array("img"), addProduct)
router.get("/view", viewProducts)
router.get("/productdetails/:product_id", productDetails)
router.delete("/deleteproduct/:product_id", deleteProduct)
router.put("/updateproduct/:product_id", upload.array("img"), updateProduct)

module.exports = router