const Model = require('../models/book')
const Helper = require('../helpers/helpers')
const cloudinary = require('cloudinary')

module.exports = {
  
  // READ
  getAllBook: (req, res) => {

    Model.getAllBook((err, result) => {
      if (err) console.log(err)
      Helper.response(res, result, 200)

    })
  },

  getBookSearch: (req,res) => {
    const search = req.query.search || ""
    Model.getBookSearch(search, (err, result) => {
      if (err) console.log(err)
      Helper.response(res, result, 200)
    })
     
  },
  
  getBookId: (req, res) => {
    const bookid = req.params.bookid

    Model.getBookId(bookid)
      .then((resultUser) => {
        const result = resultUser[0]
        Helper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  // API di tugas minggu pertama
  getBookName: (req, res) => {
    const name = req.params.name

    Model.getBookName(name)
      .then((resultUser) => {
        const result = resultUser[0]
        Helper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  getBookCategory: (req, res) => {
    const name = req.params.name

    Model.getBookCategory(name)
      .then((resultUser) => {
        const result = resultUser[0]
        Helper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },
 
  

  // -----------READ-------------

  // DELETE
  bookDelete: (req, res) => {
    const bookid = req.params.bookid
    
    Model.bookDelete(bookid, (err, result) => {
      if (err) console.log(err)
      
      Helper.response(res, result, 200)
    })
      
  },
  // UPDATE
  bookEdit: (req, res) => {
    const bookid = req.params.bookid

    const data = {
      name: req.body.name,
      writer: req.body.writer,
      // category: req.body.category,
      // image: req.body.image,
      // status: req.body.status,
      description: req.body.description,
      // created_at: new Date(),
      // updated_at: new Date()
    }

    Model.bookEdit(data, bookid, (err, result) => {
      if (err) console.log(err)

      Helper.response(res, result, 200)
    })
  },
  pinjam: (req, res) => {
    const bookid = req.params.bookid

    const data = {
      status: req.body.status,
      
    }

    Model.pinjam(data, bookid, (err, result) => {
      if (err) console.log(err)

      Helper.response(res, result, 200)
    })
  },
  kembalikan: (req, res) => {
    const bookid = req.params.bookid

    const data = {
      status: req.body.status,
      
    }

    Model.kembalikan(data, bookid, (err, result) => {
      if (err) console.log(err)

      Helper.response(res, result, 200)
    })
  },

// CREATE
  
  
  bookPost: async (req, res) => {
    console.log('file path nih ', req.file)
    let path = req.file.path
    let geturl = async (req) => {
      cloudinary.config({
        cloud_name: 'dfi7jxk4u',
        api_key: '792835522947859',
        api_secret: 'bp82wyB7QxkPQwqFra3BNPSXGck'
      })

      let data
      await cloudinary.uploader.upload(path, (result) => {
        const fs = require('fs')
        fs.unlinkSync(path)
        data = result.url
      })

      return data
    }

    const data = {
      name: req.body.name,
      writer: req.body.writer,
      category: req.body.category,
      // id_category: req.body.id_category,
      image: await geturl(),
      // image: req.body.image,
      description: req.body.description,
      status: 1
    };
    console.log("reqbody",req.body);

    Model
      .bookPost(data, (err, result) => {
        if (err) console.log(err)

        Helper.response(res, result, 200)
      })

      
  },

}
