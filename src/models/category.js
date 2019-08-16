const connection = require('../configs/db')

module.exports = {//mencoba memodifikasi menjadi sesuai dengan tabel yang aku buat

  
    getCategory: (callback) => {
        connection.query(`SELECT * FROM category`, (err, result) => {
        if (err) console.log(err)

        callback(err, result)
        })
    },

  
    // getBookCategory: (bookCategory) => {//masih kaku tidak pakai like dulu
    //     return new Promise((resolve, reject) => {
    //     connection.query(`SELECT b.id, b.name,l.name_location AS location, c.name_category AS category, b.updated_at, b.created_at FROM book b INNER JOIN location l ON l.id = b.location INNER JOIN category c ON c.id = b.category WHERE c.name_category = ?`, bookCategory, (err, result) => {
    //         if (!err) {
    //         resolve(result)
    //         } else {
    //         reject(new Error(err))
    //         }
    //     })
    //     })
    // },
  
    categoryPost: (input, callback) => {
        connection.query("INSERT INTO `category` SET ?", input, (err, result) => {
        if (err) console.log(err)

        callback(err, result)
        })
    },
  
}
