const express = require('express')
const Route = express.Router()
const controller = require('../controllers/user')
const Auth = require('../helpers/auth')

// Route
//     .all('/*',Auth.authInfo)
//     .get('/', Auth.accessToken,controller.getAllUSer) //belum fix
//     // .post('/register',controller.postUser)
//     .post('/register', controller.pureUserPost)
//     .post('/login',controller.getByEmail)
//     .post('/getToken', Auth.accessToken) //belum fix
//     .delete('/:userid', Auth.accessToken, controller.deleteUser) //belum fix. yang bisa cuma admin

Route
    // .all('/*',Auth.authInfo)
    .get('/', controller.getAllUSer) //belum fix
    // .post('/register',controller.postUser)
    .post('/register', controller.postUser)
    .post('/login',controller.getUserByEmail)
    // .post('/getToken', Auth.accessToken) //belum fix
    .delete('/:userid', Auth.authInfo, Auth.accessToken, controller.deleteUser) //belum fix. yang bisa cuma admin


module.exports = Route