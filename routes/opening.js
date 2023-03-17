const express = require('express')
const router = express.Router();
const { validateOpening } = require('../validation/openingValidation');
const { createNewOpening, updateOpening, deleteOpening, getAllOpening } = require('../controllers/openingController');

// create opening
router.post('/create', validateOpening, createNewOpening);

//update opening
router.put('/update', validateOpening, updateOpening);

//delete opening
router.delete('/delete', deleteOpening);

//get all opening
router.get('/getAll', getAllOpening);

module.exports = router;