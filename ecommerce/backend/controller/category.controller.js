const CategoryModel = require("./../model/category.model")

exports.addCategory = async (req, res, next) => {
    var cat = await CategoryModel.findOne({
        category_name: req.body.category_name
    })
    if (cat) {
        return next({
            msg: "Category Already Exist",
            status: 404
        })
    }
    if (!cat) {
        var newCategory = new CategoryModel()
        newCategory.category_name = req.body.category_name

        var categorySave = await newCategory.save()
        if (!categorySave) {
            return next({
                msg: "Something Went Wrong",
                status: 404
            })
        }
        res.json({
            msg: "New Category Added Successfully",
            new_category: categorySave,
            status: 200
        })
    }
}


exports.viewCategory = async (req, res, next) => {
    var category = await CategoryModel.find()
    if (!category) {
        return next({
            msg: "something went wrong",
            status: 404
        })
    }

    if (category == null) {
        return next({
            msg: "empty category",
            status: 404
        })
    }
    res.json(category)
}

exports.categoryDetails = async (req, res, next) => {
    var category = await CategoryModel.findById(req.params.category_id)
    if (!category) {
        return next({
            msg: "Something Went Wrong",
            status: 404
        })
    }

    if (category == null) {
        return next({
            msg: "Category Not Found",
            status: 404
        })
    }
    res.json(category)
}


exports.updateCategory = async (req, res, next) => {
    var category = await CategoryModel.findByIdAndUpdate(req.params.category_id, {
        category_name: req.body.category_name
    }, {
        new: true
    })

    if (!category) {
        return next({
            msg: "Something Went Wrong",
            status: 404
        })
    }
    res.json({
        msg: "Category Updated Successfully",
        updatedCategory: category,
        status: 200
    })
}

exports.deleteCategory = async (req, res, next) => {
    var category = await CategoryModel.findByIdAndDelete(req.params.category_id)
    if (!category) {
        return next({
            msg: "Something Went Wrong",
            status: 404
        })
    }
    if (category == null) {
        return next({
            msg: "Category Not Found",
            status: 404
        })
    }
    res.json({
        msg: "Category Deleted Successfully",
        deletedCategory: category,
        status: 200
    })
}