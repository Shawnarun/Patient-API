const express = require('express');
const patientController = require('../controllers/patientController');




const router = express.Router();


router.post('/create', patientController.create);
router.get('/find-by-id/:id', patientController.get);
router.get('/find-all', patientController.getAll);
router.get('/find-all-pagination', patientController.getPagination);
router.delete('/delete/:id', patientController.delete);
router.patch('/update/:id', patientController.update);


module.exports = router;
