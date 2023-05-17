const Student = require('../models/studentsModel')

const getStudents = async (req,res) => {
    try {
        const students = await Student.find()
        //console.log('students',students)
        if(students.length > 0){
            return res.status(200).json({
                status:true,
                message:'students fetched successfully',
                data:students
            })
        } else {
            return res.send({
                status:false,
                message:'no student found',
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const createStudents = async (req,res) => {
    try {
        const existingStudent = await Student.findOne({rollNo:req.body.rollNo})
       // console.log('existing student',existingStudent)
        if(existingStudent){
            return res.send({
                status:false,
                message:'Student with this roll no already exists',
            })
        }
        const student = await Student.create(req.body)
        return res.status(200).json({
            status:true,
            message:'Student registered successfully',
            data:student
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status:false,
            message:'Something went wrong',
        })
    }
}

const getStudentByRollNo = async (req,res) => {
    try {
        const student = await Student.findOne({rollNo:req.params.rollNo})
        if(!student){
            return res.status(402).json({
                status:false,
                message:'student not found with the given roll no',
            })
        }
        return res.status(200).json({
            status:true,
            message:'student fetched',
            data:student
        })
    } catch (error) {
        console.log(error)
    }
}

const updateStudent = async (req,res) => {
    try {
        const student = await Student.findOneAndUpdate({rollNo:req.params.rollNo}, req.body, {new:true})
        if(!student){
            return res.status(402).json({
                status:false,
                message:'student not found'
            })
        }
        return res.status(200).json({
            status:true,
            message:'student updated successfully',
            data:student
        })
    } catch (error) {
        console.log(error)
        return res.status(401).json({
            status:false,
            message:'something went wrong'
        })
    }
}

const deleteStudent = async (req,res) => {
    try {
        const student = await Student.findByIdAndDelete({employeeId:req.params.rollNo})
        if(!student){
            return res.status(401).json({
                status:false,
                message:'student not found with the given id',
            })
        }
        return res.status(200).json({
            status:true,
            message:'student deleted successfully',
            data:student
        })
    } catch (error) {
        
    }
}

module.exports = {getStudents, createStudents, getStudentByRollNo, updateStudent, deleteStudent}