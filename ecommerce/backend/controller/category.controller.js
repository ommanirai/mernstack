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
        res.json(categorySave)
    }
}