const express = require('express')
const router = express.Router()
const { getEmployee } = require('../controllers/employeeController')
const { authMiddleware } = require('../middleware/auth')



router.post('/get-employee-by-id', authMiddleware, getEmployee)



module.exports = router