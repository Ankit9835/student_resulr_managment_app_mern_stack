const Employee = require('../models/employeeModel')

const getEmployee = async (req,res) => {
    try {
        const employee = await Employee.findOne({_id:req.body.employeeId})

        if(!employee){
            return res.status(401).json({
                message:'Employee not found',
                status:false
            })
        }
        employee.password = undefined
        return res.status(200).json({
            message:'Employee found',
            data:employee,
            status:true
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {getEmployee}