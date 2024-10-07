const Router = require('express');
const router = new Router();
const shelterAdminsController = require('../controllers/shelterAdminsController');
const authMiddleware = require('../middleware/AuthMiddleware');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/login', shelterAdminsController.login);
router.post('/registration', checkRole(['ADMIN', 'OWNER']), shelterAdminsController.registration);
// router.put('/edit/:id', shelterController.edit);
router.get('/auth', authMiddleware, shelterAdminsController.check);
router.get('/:id', checkRole(['ADMIN', 'OWNER', 'EMPLOYEE']), shelterAdminsController.getOne);
router.get('/all-admins', checkRole(['ADMIN', 'OWNER', 'EMPLOYEE']), shelterAdminsController.getAll);  

module.exports = router; 