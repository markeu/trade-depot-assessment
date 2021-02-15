const multer = require("multer")

const storage = multer.diskStorage({
    destination: 'src/upload/',
    filename: function(_req, file, cb) {
        const newFileName = `${'bb'}-${file.originalname}`
        cb(null, newFileName);
    }
})

module.exports = multer({ storage: storage }).single('image_url')