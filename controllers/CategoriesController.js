const db = require('../config/database.js');


const CategoriesController = {
    insert (req, res) {
        let sql = `INSERT INTO categories (name_category, description) values ('${req.body.name_category}', '${req.body.description}');`
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send("Post added...");
        });
    },
    update (req, res)  {
        let newcategoryName = req.body.name_category;
        let sql = `UPDATE categories SET name_category = '${newcategoryName}' WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send('Post updated...')
        })
    },
    getAll (req, res) {
        let sql = 'SELECT * FROM categories';
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result)
        })
    },
    getByID (req, res) {
        let sql = `SELECT * FROM categories WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result)
        })
    }
}
module.exports = CategoriesController;