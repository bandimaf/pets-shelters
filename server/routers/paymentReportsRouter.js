const Router = require('express');
const router = new Router();
const paymentReportsController = require('../controllers/paymentReportsController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/add-report', checkRole(['ADMIN', 'OWNER', 'EMPLOYEE']), paymentReportsController.create) 
router.put('/update-report', checkRole(['ADMIN', 'OWNER', 'EMPLOYEE']), paymentReportsController.update) 
router.delete('/delete-report/:id', checkRole(['ADMIN', 'OWNER', 'EMPLOYEE']), paymentReportsController.delete) 
// router.get('/:id', paymentReportsController.getOne);
router.get('/all-reports', paymentReportsController.getAll);  

module.exports = router; 