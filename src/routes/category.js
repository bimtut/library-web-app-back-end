const controller = require('../controllers/category')
const app = require('express')
const Route = app.Router()
const Auth = require('../helpers/auth')

    Route
    .all('/*',Auth.authInfo)
    // .get('/',controller.getCategories)
    .get('/', controller.getCategory)
    .post('/', controller.categoryPost)
    // .get('/:name', CategoryController.getBookCategory) //ini belum ada reduxnya

module.exports = Route