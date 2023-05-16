const Student = require('../models/studentsModel')

const getStudents = async () => {
    try {
        const students = await Student.findOne({rollNo:req.body.rollNo})
        console.log('students',students)
    } catch (error) {
        console.log(error)
    }
}

const createStudents = async () => {

}

module.exports = {getStudents}