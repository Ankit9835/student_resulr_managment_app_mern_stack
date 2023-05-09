import React from 'react'
import { Form, Input } from "antd";
import { Link } from 'react-router-dom';
import axios from 'axios'
import toast from "react-hot-toast";

const Register = () => {
  const onFinish = async (value) => {
    try {
      console.log(value)
      const response = await axios.post('http://localhost:5000/api/auth/register', value)
      console.log('response',response)
      if(response.data.status == true){
        toast.success(response.data.message)
      }

      if(response.data.status == false){
        toast.success(response.data.message)
      }
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="primary d-flex align-items-center justify-content-center h-screen">
    <Form layout="vertical w-400 white p-4" onFinish={onFinish}>
      <h1 className="text-medium"><b>SHEY RESULTS</b></h1>
      <hr />
      <h1 className="text-medium">Employee - Registration</h1>
      <hr />
      <Form.Item name="name" label="Name">
        <Input />
      </Form.Item>
      <Form.Item name="employeeId" label="Employee ID">
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Password">
        <Input type="password" />
      </Form.Item>
      <Form.Item name="confirmPassword" label="Confirm Password">
        <Input type="password" />
      </Form.Item>
      <button typ className="primary text-white px-5 my-2 w-100">REGISTER</button>
      <Link to="/login" className=" text-mini">
        Already Registered , Click Here To Login
      </Link>
    </Form>
  </div>
  )
}

export default Register
