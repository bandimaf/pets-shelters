const Router = require('express');
const router = new Router();
const adressesController = require('../controllers/adressesController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/add-adress', checkRole(['ADMIN', 'OWNER', 'EMPLOYEE']), adressesController.create) 
router.put('/update-adress', checkRole(['ADMIN', 'OWNER', 'EMPLOYEE']), adressesController.update) 
router.delete('/delete-adress/:id', checkRole(['ADMIN', 'OWNER', 'EMPLOYEE']), adressesController.delete) 
router.get('/:id', adressesController.getOne);
router.get('/all-adresses', adressesController.getAll);  

module.exports = router; 