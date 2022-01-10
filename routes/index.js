const express = require('express');
const homeController = require('../controllers/home_controller');

const router = express.Router();
router.use(express.urlencoded());
router.get('/', homeController.home);
router.post('/create', homeController.create);

module.exports = router;