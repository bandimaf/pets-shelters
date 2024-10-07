const Router = require('express');
const router = new Router();
const checkRole = require('../middleware/checkRoleMiddleware');


const newsController = require('../controllers/newsController');

router.post('/add-news', checkRole(['ADMIN', 'OWNER', 'EMPLOYEE']), newsController.create) 
router.put('/update-news', checkRole(['ADMIN', 'OWNER', 'EMPLOYEE']), newsController.update) 
router.delete('/delete-news/:id', checkRole(['ADMIN', 'OWNER', 'EMPLOYEE']), newsController.delete) 
router.get('/all-news', newsController.getAll) 
router.get('/:id', newsController.getOne) 

module.exports = router; 