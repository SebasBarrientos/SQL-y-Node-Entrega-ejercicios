const express = require("express");
const app = express();
const mysql = require('mysql2');
const PORT = 3000;
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'kali',
    database: 'expressDB'

});

db.connect();

app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE expressDB';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Database created...')
    })
})


app.listen(PORT, () => {
    console.log("Servidor levantado");
})
//Tabla Products
app.get('/createproductstable', (req, res) => {
    let sql = 'CREATE TABLE products(id INT AUTO_INCREMENT, name_product VARCHAR(50), price FLOAT, PRIMARY KEY(id))'
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Posts table created...')
    })
})
//Tabla Categories
app.get('/createcategoriestable', (req, res) => {
    let sql = 'CREATE TABLE categories(id INT AUTO_INCREMENT, name_category VARCHAR(50), description VARCHAR(50),PRIMARY KEY(id))'
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Posts table created...')
    })
})
app.get('/createcategoriesproductstable', (req, res) => {
    let sql = 'CREATE TABLE productoscategorias(id INT AUTO_INCREMENT, product_id INT, category_id INT, PRIMARY KEY(id), FOREIGN KEY(product_id) REFERENCES products(id) ON DELETE CASCADE, FOREIGN KEY(category_id) REFERENCES categories(id))'
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Posts table created...')
    })
})

app.post("/products", (req, res) => {
    let sql = `INSERT INTO products (name_product, price) values ('${req.body.name_product}', '${req.body.price}');`
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Post added...");
    });
});
app.post("/categories", (req, res) => {
    let sql = `INSERT INTO categories (name_category, description) values ('${req.body.name_category}', '${req.body.description}');`
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Post added...");
    });
});


app.put('/products/id/:id', (req, res) => {
    let newProductName = req.body.name_product;
    let sql = `UPDATE products SET name_product = '${newProductName}' WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send('Post updated...')
    })
})
app.put('/categories/id/:id', (req, res) => {
    let newcategoryName = req.body.name_category;
    let sql = `UPDATE categories SET name_category = '${newcategoryName}' WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send('Post updated...')
    })
})


app.get('/products', (req, res) => {
    let sql = 'SELECT * FROM products';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

app.get('/categories', (req, res) => {
    let sql = 'SELECT * FROM categories';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})



app.post("/productscategorys", (req, res) => {
    let sql = `INSERT INTO productoscategorias (product_id, category_id) values (1, 1), (2, 1), (3, 1), (4, 2);`
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Post added...");
    });
});


app.get('/productscategorys', (req, res) => {
    let sql = 'SELECT name_product, name_category FROM productoscategorias INNER JOIN categories ON categories.id = productoscategorias.category_id INNER JOIN products ON products.id = productoscategorias.product_id;';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

app.get('/products/id/:id',(req,res)=>{
    let sql = `SELECT * FROM products WHERE id = ${req.params.id}`;
    db.query(sql,(err,result)=> {
        if(err) throw err;
        res.send(result)
    })
})


app.get('/products/order', (req, res) => {
    let sql = 'SELECT * FROM products order by id desc';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

app.get('/categories/id/:id',(req,res)=>{
    let sql = `SELECT * FROM categories WHERE id = ${req.params.id}`;
    db.query(sql,(err,result)=> {
        if(err) throw err;
        res.send(result)
    })
})

app.get('/products/name/:name_product',(req,res)=>{
    let sql = `SELECT * FROM products WHERE name_product = 'q${req.params.name_product}'`;
    db.query(sql,(err,result)=> {
        if(err) throw err;
        res.send(result)
    })
})


app.delete('/products/id/:id',(req,res)=>{
    let sql = `DELETE FROM products WHERE id = ${req.params.id}`;
    db.query(sql, (err,result)=> {
      if(err) throw err;
      res.send('Post deleted')
    })
  })
  