const connection = require('../configs/db')

module.exports = {//mencoba memodifikasi menjadi sesuai dengan tabel yang aku buat
    pureUserPost: (input, callback) => { //post user untuk non admin
        connection.query("INSERT INTO user SET ?", input, (err, result) => {
          if (err) console.log(err)
    
          callback(err, result)
        })
    },
    postUser: (input, callback) => { //post user untuk non admin
      connection.query("INSERT INTO user SET ?", input, (err, result) => {
        if (err) console.log(err)
  
        callback(err, result)
      })
  },
    getAllUser: (callback) => {
      connection.query("SELECT user.*, role.name as role FROM user INNER JOIN role ON user.role = role.id", (err, result) => {
          if (err) console.log(err)
    
          callback(err, result) 
      })
    }, 
    getUserByEmail: (email, callback) => {
      connection.query("SELECT user.*, role.name as role FROM user INNER JOIN role ON role.id = user.role WHERE email = ?", email, (err, result) => {
        if (err) console.log(err)
    
        callback(err, result) 
        // console.log(err, result);
         
      })
    },
    // getUserByEmail: (email) => {
    //   return new Promise ((resolve, reject) => {
    //     connection.query("SELECT user.*, role.name as role FROM user INNER JOIN role ON role.id = user.role WHERE email = ?", email, (err, result) => {
    //       if (!err) {
    //         resolve(result)
    //     } else {
    //         reject(new Error(err))
    //     }    
    //     })

    //   })
    // },

    deleteUser: (userid, callback) => {
      // return new Promise((resolve, reject) => {
      connection.query('DELETE FROM user WHERE id = ? ', userid, (err, result) => {
        if (err) console.log(err)

        callback(err, result)  
      })
    }
}

