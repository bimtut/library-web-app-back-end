const Model = require('../models/category')
const Helper = require('../helpers/helpers')

module.exports = {
  
  getCategory: (req, res) => {
    
    Model.getCategory((err, result) => {
      if (err) console.log(err)
      Helper.response(res, result, 200)

    })
  },
  
  // getBookCategory: (req, res) => {
  //   const name = req.params.name

  //   Model.getBookCategory(name)
  //     .then((resultUser) => {
  //       const result = resultUser[0]
  //       MiscHelper.response(res, result, 200)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // },
  
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
  
  
}
