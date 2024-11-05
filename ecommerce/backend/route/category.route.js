const { addCategory, viewCategory, categoryDetails, updateCategory, deleteCategory } = require("../controller/category.controller")

const router = require("express").Router()

router.post("/addcategory", addCategory)
router.get("/view", viewCategory)
router.get("/categorydetails/:category_id", categoryDetails)
router.put("/updatecategory/:category_id", updateCategory)
router.delete("/deletecategory/:category_id", deleteCategory)


module.exports = router