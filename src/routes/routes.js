const express = require('express')
const Route = express.Router()

const UserController = require('../controllers/user')
const BookController = require('../controllers/book')
const CategoryController = require('../controllers/controllers')
const HistoryController = require('../controllers/history')
// const BookController = require('../controllers/book')


Route
  .get('/', UserController.getIndex)
  .get('/book', BookController.getAllBook)
  .get('/book/:bookid', BookController.getBookId)
  .get('/book/name/:name', BookController.getBookName)
  .get('/category', CategoryController.getCategory)
  // .get('/location', UserController.getLocation)
  .get('/category/:name', CategoryController.getBookCategory)
  // .get('/location/:name', UserController.getBookLocation)
  .get('/user', UserController.getAllUSer)
  .patch('/book/:bookid',BookController.bookEdit)
  .delete('/book/:userid',BookController.bookDelete)
  .post('/category', CategoryController.categoryPost)
  .post('/book', BookController.bookPost)
  .post('/user/register', UserController.pureUserPost)
  // .patch('/:userid', UserController.updateUser)

module.exports = Route
