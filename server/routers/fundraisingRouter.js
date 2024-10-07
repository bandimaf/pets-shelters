const Router = require('express');
const router = new Router();
const checkRole = require('../middleware/checkRoleMiddleware');
const fundraisingController = require('../controllers/fundraisingController');

router.post('/add-fundraising', checkRole(['ADMIN', 'OWNER', 'EMPLOYEE']), fundraisingController.create) 
router.put('/update-fundraising', checkRole(['ADMIN', 'OWNER', 'EMPLOYEE']), fundraisingController.update) 
router.delete('/delete-fundraising/:id', checkRole(['ADMIN', 'OWNER', 'EMPLOYEE']), fundraisingController.delete) 
router.get('/all-fundraising', fundraisingController.getAll) 
router.get('/:id', fundraisingController.getOne) 

module.exports = router; 