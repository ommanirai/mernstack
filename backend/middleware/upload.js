const multer = require("multer")
const path = require("path")

// const upload = multer({
//     dest:"uploads/images/"
// })

const uploader = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    },
    destination: function (req, file, cb) {
        cb(null, path.join(process.cwd(), "uploads/images/"))
    }
})

const typeFilter = (req, file, cb) => {
    var fileType = file.mimetype.split("/")[0]
    if (fileType != "image") {
        req.fileTypeError = true
        cb(null, false)
    }
    else {
        cb(null, true)
    }
}

const upload = multer({
    storage: uploader,
    fileFilter:typeFilter
})

module.exports = upload