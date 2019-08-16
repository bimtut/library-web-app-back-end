const connection = require('../configs/db')

module.exports = {//mencoba memodifikasi menjadi sesuai dengan tabel yang aku buat

  //mirip find all
  getAllBook: (callback) => {//tampilan updated dan created at bisa dimodif agar lebih informatif. misal hanya menampilkan tahun
    connection.query(`SELECT b.id, b.name, b.image,  b.status, b.category, b.writer, b.description, b.updated_at, b.created_at FROM book b`, (err, result) => {
      if (err) console.log(err)
      
      callback(err, result)
    })
  },
  // get book by search
  getBookSearch: (search, callback) => {
    const word = `%${search}%`
      connection.query(`SELECT b.name, b.image, b.status, b. description, c.name AS category FROM book b INNER JOIN category c ON b.category = c.id WHERE b.name LIKE ? OR b.description LIKE ? OR b.writer LIKE ?`, [word, word, word], (err, result) => {
        
        if (err) console.log(err)
      
        callback(err, result)
      })
  },

  //mirip find by id
  getBookId: (id) => {//masih kaku tidak pakai like dulu
    return new Promise((resolve, reject) => {
      connection.query(`SELECT b.name, b.writer, b.description, b.image, b.status, c.name AS category FROM book b INNER JOIN category c ON c.id = b.category WHERE b.id = ?`, id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getBookName: (bookName) => {//di web tidak dipake dulu karena terwakili di search
    return new Promise((resolve, reject) => {
      connection.query(`SELECT b.id, b.name,l.name_location AS location, c.name_category AS category, b.updated_at, b.created_at FROM book b INNER JOIN location l ON l.id = b.location INNER JOIN category c ON c.id = b.category WHERE b.name = ?`, bookName, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getBookCategory: (bookCategory) => {//masih kaku tidak pakai like dulu
    return new Promise((resolve, reject) => {
      connection.query(`SELECT b.id, b.name,l.name_location AS location, c.name_category AS category, b.updated_at, b.created_at FROM book b INNER JOIN location l ON l.id = b.location INNER JOIN category c ON c.id = b.category WHERE c.name_category = ?`, bookCategory, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  
  
  bookDelete: (bookid, callback) => {
    connection.query(`DELETE FROM book WHERE id = ? `, bookid, (err, result) => {
      if (err) console.log(err)
    
      callback(err, result)
    })
    
  },
  
  bookEdit: (data, bookid, callback) => {
    
      connection.query("UPDATE `book` SET ? WHERE `book`.`id` = ?", [data, bookid], (err, result) => {
        if (err) console.log(err)
    
        callback(err, result)
      })
      
    
  },
  pinjam: (data, bookid, callback) => {
    
    connection.query("UPDATE `book` SET ? WHERE `book`.`id` = ?", [data, bookid], (err, result) => {
      if (err) console.log(err)
  
      callback(err, result)
    })
    
  
},
  bookPost: (input, callback) => {
    
    connection.query("INSERT INTO `book` SET ?", input,  (err, result)=>{
      if (err) console.log(err)

      callback(err,result)
  })
  }, 
 
  
}
