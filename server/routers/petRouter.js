const Router = require('express');
const router = new Router();
const checkRole = require('../middleware/checkRoleMiddleware');

const petController = require('../controllers/petController');

router.post('/add-pet', checkRole(['ADMIN', 'OWNER', 'EMPLOYEE']), petController.create) 
router.put('/update-pet/:id', checkRole(['ADMIN', 'OWNER', 'EMPLOYEE']), petController.update) 
router.delete('/delete-pet/:id', checkRole(['ADMIN', 'OWNER']), petController.delete) 
router.get('/all-pets', petController.getAll) 
router.get('/:id', petController.getOne) 

module.exports = router; 