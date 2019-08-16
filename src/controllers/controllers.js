const Model = require('../models/models')
const Helper = require('../helpers/helpers')

module.exports = {
  getIndex: (req, res) => {
    return res.json({ message: 'Hello from the uwowowowow' })
  },
//tentukan mau pake kolbek atau promes
  // Using Callback
  // getUsers: (req, res) => {
  //   userModels.getUsers((err, result) => {
  //     if (err) console.log(err)

  //     // res.json(result)
  //     MiscHelper.response(res, result, 200)
  //   })
  // },//lakukan juga di method lain yang udah aku bikin ya tapi nanya orang duilu jangan sok tau ih

  // Using Promise
  // userDetail: (req, res) => {
  //   const userid = req.params.userid

  //   userModels.userDetail(userid)
  //     .then((resultUser) => {
  //       const result = resultUser[0]
  //       MiscHelper.response(res, result, 200)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // },

  // updateUser: async (req, res) => {//ga usah pakai async await bangsat

  // },

  getAllBook: (req, res) => {
    // const userid = req.params.userid

    Model.getAllBook((err, result) => {
      if (err) console.log(err)
      Helper.response(res, result, 200)

    })
  },
  getLocation: (req, res) => {
    
    Model.getLocation((err, result) => {
      if (err) console.log(err)
      Helper.response(res, result, 200)

    })
  },
  getCategory: (req, res) => {
    
    Model.getCategory((err, result) => {
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
  getBookLocation: (req, res) => {
    const name = req.params.name

    Model.getBookLocation(name)
      .then((resultUser) => {
        const result = resultUser[0]
        Helper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  getBookComplete: (req, res) => {
    const userid = req.params.userid

    Model.userDetail(userid)
      .then((resultUser) => {
        const result = resultUser[0]
        Helper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  bookDelete: (req, res) => {
    const userid = req.params.userid

    Model.userDetail(userid)
      .then((resultUser) => {
        const result = resultUser[0]
        Helper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  bookEdit: (req, res) => {
    const bookid = req.params.bookid

    const data = {
      name: req.body.name,
      writer: req.body.writer,
      category: req.body.category,
      image: req.body.image,
      // status: req.body.status,
      description: req.body.description,
      // created_at: new Date(),
      updated_at: new Date()
    }

    // Model.userDetail(userid)
    //   .then((resultUser) => {
    //     const result = resultUser[0]
    //     MiscHelper.response(res, result, 200)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  //   Model.bookEdit(data, bookid, (err, result)=>{
  //     if (err) console.log(err)

  //     MiscHelper.response(res, result, 200)
  // })

    Model.bookEdit(data, bookid)
      .then((resultUser) => {
        const result = resultUser[0]
        Helper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  bookPost: (req, res) => {
    const data = {
      name: req.body.name,
      writer: req.body.writer,
      category: req.body.category,
      image: req.body.image,
      // status: req.body.status,
      description: req.body.description
      // created_at: new Date(),
      // updated_at: new Date()
    }

    // Model.bookPost(data)
    //   .then((resultUser) => {
    //     const result = resultUser[0]
    //     MiscHelper.response(res, result, 200)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    Model.bookPost(data, (err, result)=>{
      if (err) console.log(err)

      Helper.response(res, result, 200)
  })
  },
  categoryPost: (req, res) => {
    const data = {
      name: req.body.name,
      denda: req.body.denda
    }

    Model.categoryPost(data, (err, result) => {
      if (err) console.log(err)

      Helper.response(res, result, 200)
    })
  },
  pureUserPost: (req, res) => {
    const data = {
      username: req.body.username,
      // role: req.body.denda,
      email: req.body.email,
      // status: req.body.denda,
      password: req.body.password,
    }

    Model.pureUserPost(data, (err, result) => {
      if (err) console.log(err)

      Helper.response(res, result, 200)
    })
  }
}
