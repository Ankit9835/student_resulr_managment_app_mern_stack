import React from 'react'
import { Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';


const Login = () => {
  const {name} = useSelector((state) => state.alert)
  console.log('name',name)
  const onFinish = async (value) => {
    try {
      console.log(value)
      const response = await axios.post('http://localhost:5000/api/auth/login', value)
      console.log('response',response)
      if(response.data.status == true){
        localStorage.setItem("token", response.data.data);
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
      <h1 className="text-medium">Employee - Login</h1>
      <hr />
      <Form.Item name="employeeId" label="Employee ID">
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Password">
        <Input type="password" />
      </Form.Item>

      <button className="primary text-white px-5 my-2 w-100">Login</button>
      <Link to="/register" className="text-mini text-black">
        Not yet Registered , Click Here To Register
      </Link>
    </Form>
  </div>
  )
}

export default Login
