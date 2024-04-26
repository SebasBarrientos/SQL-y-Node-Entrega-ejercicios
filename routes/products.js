const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductsController.js');

router.post('/products', ProductController.insert)
router.put('/products/id/:id', ProductController.update)
router.get('/products', ProductController.getAll)
router.get('/products/id/:id', ProductController.getByID)
router.get('/products/order', ProductController.orderDesc)
router.get('/products/name/:name_product', ProductController.getByName)
router.delete('/products/id/:id', ProductController.getByName)





module.exports = router;