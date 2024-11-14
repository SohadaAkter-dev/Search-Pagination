const express = require('express')
const router = express.Router()
const testController = require('../controller/testController')
const ProductController = require('../controller/ProductController')
router.get("/test",testController.test)

router.get("/product-list/:pageNumber/:perPage/:searchKeyword",ProductController.ProductSearchAndPagination)
module.exports= router