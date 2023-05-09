const Employee = require('../models/employeeModel')
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

const register = async (req,res) => {
    try {
        const employee = await Employee.findOne({employeeId:req.body.employeeId})
        if(employee){
            return res.json({
                message:'Employee already exists',
                status:false
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;
        const newEmployee = await Employee.create(req.body)
        return res.json({
            status:true,
            message:'Employee created successfully'
        })
    } catch (error) {
        console.log(error)
    }
}

const login = async (req,res) => {
    try {
        const employee = await Employee.findOne({employeeId:req.body.employeeId})
        if(!employee){
            return res.json({
                status:false,
                message:'Invalid employee ID'
            })
        }
        const isMatch = await bcrypt.compare(req.body.password, employee.password)
        if(!isMatch){
            return res.json({
                status:false,
                message:'password not match'
            })
        }
        if(employee.isApproved == false){
            return res.json({
                status:false,
                message:'wait for the admin approval'
            })
        }
        const token = jwt.sign({_id:employee._id}, process.env.JWT_SECRET, {expiresIn:'24h'})
        return res.json({
            status:true,
            message:'login successfully',
            data:token
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {register,login}