const Router = require('express');
const router = new Router();
const ownersController = require('../controllers/ownersController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/add-owner', checkRole(['ADMIN', 'OWNER', 'EMPLOYEE']), ownersController.create) 
router.put('/update-owner', checkRole(['ADMIN', 'OWNER', 'EMPLOYEE']), ownersController.update) 
router.delete('/delete-owner/:id', checkRole(['ADMIN', 'OWNER', 'EMPLOYEE']), ownersController.delete) 
router.get('/:id', ownersController.getOne);
router.get('/all-owners', ownersController.getAll);  

module.exports = router; 