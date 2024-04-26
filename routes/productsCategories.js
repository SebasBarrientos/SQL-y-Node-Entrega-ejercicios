const express = require('express');
const ProductsCategoriesController = require('../controllers/ProductsCategoriesController');
const router = express.Router();

router.post("/productscategorys", ProductsCategoriesController.insert)
router.get('/productscategorys', ProductsCategoriesController.getAll)



module.exports = router;