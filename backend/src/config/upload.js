const multer = require("multer")
const path = require("path")

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename: (req, file, cb) => {
      const ext = (`${file.fieldname}-${Date.now()}`)
      const name = path.basename(file.originalname, ext)

      cb(null, `${name}-${Date.now()}${ext}`)

    }
  }),
}