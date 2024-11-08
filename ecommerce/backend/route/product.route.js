// const app = require("express")
// const router = app.Router()

const { addProduct } = require("../controller/product.controller")
const upload = require("./../middleware/upload")
const router = require("express").Router()

router.post("/add", upload.array("img"),  addProduct)

module.exports = router