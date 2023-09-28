const express = require('express')
const router = express.Router()
let {createOfCRUD ,retrieveOfCRUD, updateOfCRUD, deleteOfCRUD} = require('../controllers/person')

// Routes to access Controllers
router.post('/api/v1/persons', createOfCRUD)

router.get('/api/v1/persons', retrieveOfCRUD)

router.put('/api/v1/persons/:id', updateOfCRUD)

router.delete('/api/v1/persons/:id', deleteOfCRUD)



// Export router to allow imports in other files
module.exports = router