const Model = require('../models/user')
const Helper = require('../helpers/helpers')

const jwt = require('jsonwebtoken')

module.exports = {
    // post user by admin blom dibikin ya
    pureUserPost: (req, res) => { //post user untuk non admin
        const data = {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        }
    
        Model.pureUserPost(data, (err, result) => {
          if (err) console.log(err)
    
          Helper.response(res, result, 200)
        })
    },
    
    getAllUSer: (req, res) => {
        Model.getAllUser((err, result) => {
            if (err) console.log(err)
    
            Helper.response(res, result, 200)
        })
    },

    deleteUser: (req, res) => {
        const userid = req.params.userid
        
        Model.deleteUser(userid, (err, result) => {
            if (err) console.log(err)
            
            Helper.response(res, result, 200)
        })
    },
    
    

    postUser: (req, res) => {
        const salt = Helper.generateSalt()
        const passwordHash = Helper.setPassword(req.body.password, salt)
        const data = {
            username: req.body.username,
            email: req.body.email,
            password: passwordHash.passwordHash,
            salt: passwordHash.salt,
        }
        Model.postUser(data, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                Helper.response(res, result, 200)
                console.log('sego tempe')
            }
            
        })
        //     .then((result) => {
        //         // langsung login
        //         login(data.email,req.body.password,res)
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //         res.json(error)
        // })
    },

    //   login: (req, res) => {
    //     const email = req.body.email
    //     const password = req.body.password
    
    //     userModel.getByEmail(email)
    //       .then((result) => {
    //         const dataUser = result[0]
    //         const usePassword = MiscHelper.setPassword(password, dataUser.salt).passwordHash
    
    //         if (usePassword === dataUser.password) {
    //           dataUser.token = jwt.sign({
    //             userid: dataUser.userid
    //           }, process.env.SECRET_KEY, { expiresIn: '1h' })
    
    //           delete dataUser.salt
    //           delete dataUser.password
    
    //           return MiscHelper.response(res, dataUser, 200)
    //         } else {
    //           return MiscHelper.response(res, null, 403, 'Wrong password!')
    //         }
    //       })
    //       .catch((error) => {
    //         console.log(error)
    //       })
    // }
    getUserByEmail: (req, res) => {
        const email = req.body.email || req.query.email || ""
        const password = req.body.password || req.query.password || ""
        
        Model.getUserByEmail(email, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                // Helper.response(res, result, 200)
                console.log(result)

                if (result.length >0) {
                    console.log(result[0])
                    const dataUser = result[0]
                    const userPassword = Helper.setPassword(password, dataUser.salt).passwordHash
                    if (userPassword === dataUser.password) {
                        dataUser.token = jwt.sign({
                            userid: dataUser.id
                        }, process.env.SECRET_KEY, { expiresIn: '1h' })
                        delete dataUser.salt
                        delete dataUser.password
                        return res.json(dataUser)
                    } else {
                        res.json('Password Salah')
                    }
                } else{
                    res.json("Email Tidak Terdaftar")
                }
            }
        })
        

        // login(email, password, res)
    },
}

// function login (email, password, res) {
//     Model.getUserByEmail(email, password, (err, result) => {
//         if (err) {
//             console.log(error)

//         } else {
//             Helper.response(res, result, 200)

//             // console.log('teloooo', result)
//             // if (result.length >0) {
//             //     const dataUser = result[0]
//             //     const userPassword = Helper.setPassword(password, dataUser.salt).passwordHash
//             //     if (userPassword === dataUser.password) {
//             //         dataUser.token = jwt.sign({
//             //             userid: dataUser.id
//             //         }, process.env.SECRET_KEY, { expiresIn: '1h' })
//             //         delete dataUser.salt
//             //         delete dataUser.password
//             //         return res.json(dataUser)
//             //     } else {
//             //         res.json('Password Salah')
//             //     }
//             // }else{
//             //     res.json("Email Tidak Terdaftar")
//             // }
//         }
//     })
//     // .then((result) => {
//     //     // jika berhasil, maka masukka token pada hombla
//     //     if (result.length >0) {
//     //         const dataUser = result[0]
//     //         const userPassword = Helper.setPassword(password, dataUser.salt).passwordHash
//     //         if (userPassword === dataUser.password) {
//     //             dataUser.token = jwt.sign({
//     //                 userid: dataUser.id
//     //             }, process.env.SECRET_KEY, { expiresIn: '1h' })
//     //             delete dataUser.salt
//     //             delete dataUser.password
//     //             return res.json(dataUser)
//     //         } else {
//     //             res.json('Password Salah')
//     //         }
//     //     }else{
//     //         res.json("Email Tidak Terdaftar")
//     //     }
//     // })
//     // .catch((error) => {
//     //     console.log(error)
//     // })
// }
