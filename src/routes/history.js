const controller = require('../controllers/history')
const app = require('express')
const Route = app.Router()
const Auth = require('../helpers/auth')

    Route
    // .all('/*',Auth.authInfo)
    .post('/',controller.getPinjams)
    .get('/:idpinjam',controller.getPinjam)
    .post('/post',controller.postPinjam)
    .patch('/:idpinjam',controller.patchPinjam)

module.exports = Route