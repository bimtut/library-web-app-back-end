const connection = require('../configs/db')
//guna file ini apa?
//NOTE: SUDAH DIMODIF. NAMUN APAKAH END POINT YANG LAIN JUGA PERLU DITAMBAHKAN? JIKA IYA APA SAJA YA?
module.exports = {
    getHistory: (idUser,role) => {
        const query = role ? 'SELECT history.*, book.name, user.username, user.id as user_id FROM history INNER JOIN book ON book.id = history.book_id INNER JOIN user ON history.user_id = user.id':
        'SELECT history.*, book.name, user.username, user.id FROM history INNER JOIN book ON book.id = history.book_id INNER JOIN user ON history.user_id = user.id  where user_id= ?' 
        
        return new Promise((resolve, reject) => {
            con.query(query,idUser, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getPinjam: (idpinjam) => {
        return new Promise((resolve, reject) => {
            con.query('SELECT pinjam.* FROM pinjam where returned_at is null AND id = ?', idpinjam, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    postPinjam: (data) => {
        return new Promise((resolve, reject) => {
            con.query('INSERT INTO pinjam SET ?',data,(err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    patchBook :(data,bookid) => {
        return new Promise((resolve, reject) => {
            con.query('UPDATE book SET ? WHERE bookid = ?', [data, bookid], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    patchPinjam :(data,idpinjam) => {
        return new Promise((resolve, reject) => {
            con.query('UPDATE pinjam SET ? WHERE id = ?', [data, idpinjam], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    
}
