const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/UsersController');

/* GET users listing. */
router.post('/addUser', UsersController.create);
router.delete('/delUser', UsersController.delete);
router.get('/getUsers', UsersController.index);
router.put('/updateUser/:id', UsersController.update);

module.exports = router;

