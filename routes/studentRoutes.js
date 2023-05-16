const express = require('express')
const router = express.Router()
const { getStudents } = require('../controllers/studentController')
const { authMiddleware } = require('../middleware/auth')




router.post('/get-all-students', authMiddleware, getStudents)



module.exports = router