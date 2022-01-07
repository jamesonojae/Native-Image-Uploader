const { Router } = require('express');

const userControllers = require('../controllers/users');

const router = Router();

router.get('/getImages', userControllers.getImages);

router.get('/test', userControllers.testRoute);

router.post('/uploadImage', userControllers.uploadImage);

module.exports = router;
