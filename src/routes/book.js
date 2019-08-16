const controller = require('../controllers/book')
const app = require('express')
const Route = app.Router()
const Auth = require('../helpers/auth')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'src/uploads')
    },
    filename: function (req, file, cb) {
        cb(null,file.originalname)
    }
})

// var upload = multer({ dest: 'uploads/' }) //pake mana nih?
const upload = multer({storage:storage, limits: {fileSize: 100000000}})

    Route
    // .all('/*',Auth.authInfo)
    .get('/', controller.getAllBook)
    .get('/search/', controller.getBookSearch)
    .get('/:bookid', controller.getBookId)
    .post('/', upload.single('image'),controller.bookPost)
    .patch('/:bookid', controller.bookEdit)
    .patch('/:bookid/pinjam', controller.pinjam)
    .patch('/:bookid/kembalikan', controller.kembalikan)
    .delete('/:bookid',Auth.accessToken, controller.bookDelete)

module.exports = Route

