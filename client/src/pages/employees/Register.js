import React from 'react'
import { Form, Input } from "antd";
import { Link } from 'react-router-dom';


const Register = () => {
  return (
    <div className="primary d-flex align-items-center justify-content-center h-screen">
    <Form layout="vertical w-400 white p-4">
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
      <button className="primary text-white px-5 my-2 w-100">REGISTER</button>
      <Link to="/login" className=" text-mini">
        Already Registered , Click Here To Login
      </Link>
    </Form>
  </div>
  )
}

export default Register
