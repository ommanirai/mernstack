const { addCategory } = require("../controller/category.controller")

const router = require("express").Router()

router.post("/addcategory",addCategory)

module.exports = router