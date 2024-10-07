const Router = require('express');
const router = new Router();
const contactsController = require('../controllers/contactsController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/add-contact', checkRole(['ADMIN', 'OWNER', 'EMPLOYEE']), contactsController.create) 
router.put('/update-contact', checkRole(['ADMIN', 'OWNER', 'EMPLOYEE']), contactsController.update) 
router.delete('/delete-contact/:id', checkRole(['ADMIN', 'OWNER', 'EMPLOYEE']), contactsController.delete) 
router.get('/:id', contactsController.getOne);
router.get('/all-contacts', contactsController.getAll);  

module.exports = router; 