const express = require('express');
const CategoriesController = require('../controllers/CategoriesController');
const router = express.Router();

router.post('/categories', CategoriesController.insert)
router.put('/categories/id/:id', CategoriesController.update)
router.get('/categories', CategoriesController.getAll)
router.get('/categories/id/:id', CategoriesController.getByID)




module.exports = router;