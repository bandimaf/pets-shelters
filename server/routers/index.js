const Router = require('express');
const router = new Router();
const fundraisingRouter = require('./fundraisingRouter');
const newsRouterRouter = require('./newsRouter');
const petRouterRouter = require('./petRouter');
const shelterRouter = require('./shelterRouter');
const sheltersAdminRouter = require('./sheltersAdminsRouter');
const adminsRouter = require('./adminsRouter');

const ownersRouter = require('./ownersRouter');
const contactsRouter = require('./contactsRouter');
const adressesAdminRouter = require('./adressesRouter');
const paymentReportsRouter = require('./paymentReportsRouter');

router.use('/shelter', shelterRouter);
router.use('/pet', petRouterRouter);
router.use('/news', newsRouterRouter);
router.use('/fundraising', fundraisingRouter);
router.use('/admins', adminsRouter);
router.use('/sheltersAdmin', sheltersAdminRouter);

router.use('/owners', ownersRouter);
router.use('/contacts', contactsRouter);
router.use('/adresses', adressesAdminRouter);
router.use('/paymentReports', paymentReportsRouter);


module.exports = router;