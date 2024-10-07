const Router = require('express');
const router = new Router();
const shelterController = require('../controllers/shelterController');
// const authMiddleware = require('../middleware/AuthMiddleware');
const checkRole = require('../middleware/checkRoleMiddleware');

// router.post('/login', shelterController.login);
// router.post('/registration', shelterController.registration);
// // router.put('/edit/:id', shelterController.edit);
// router.get('/auth', authMiddleware, shelterController.check);
// router.get('/:id', shelterController.getOne);
// router.get('/all-shelters', shelterController.getAll);  

router.post('/add-shelter', checkRole('ADMIN'), shelterController.create) 
router.put('/update-shelter', checkRole('ADMIN' || 'OWNER' || 'EMPLOEE'), shelterController.update) 
router.delete('/delete-shelter/:id', checkRole('ADMIN'), shelterController.delete) 
router.get('/all-shelters', shelterController.getAll) 
router.get('/:id', shelterController.getOne) 

module.exports = router; 