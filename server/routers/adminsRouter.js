const Router = require('express');
const router = new Router();
const checkRole = require('../middleware/checkRoleMiddleware');
const AdminsController = require('../controllers/adminsController');
const authMiddleware = require('../middleware/AuthMiddleware');

router.post('/login', AdminsController.login);
router.post('/registration', AdminsController.registration);
router.get('/auth', authMiddleware, AdminsController.check);

module.exports = router; 