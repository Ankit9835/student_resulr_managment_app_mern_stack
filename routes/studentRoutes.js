const express = require('express')
const router = express.Router()
const { getStudents, createStudents, getStudentByRollNo, updateStudent, deleteStudent } = require('../controllers/studentController')
const { authMiddleware } = require('../middleware/auth')




router.get('/get-all-students', authMiddleware, getStudents)
router.post('/create-students', authMiddleware, createStudents)
router.get('/get-student-by-roll-no/:rollNo', authMiddleware, getStudentByRollNo)
router.put('/update-student/:rollNo', authMiddleware, updateStudent)
router.delete('/remove-student/:rollNo', authMiddleware, deleteStudent)



module.exports = router