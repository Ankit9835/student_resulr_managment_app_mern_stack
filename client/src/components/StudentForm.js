import React from 'react'
import { Col, Form, Row } from "antd";
import axios from 'axios';
import { toast } from 'react-hot-toast';

const StudentForm = ({student,type}) => {
    
    const onFinish = async (value) => {
        console.log('value',value)
        try {
          let token = localStorage.getItem('token')
          const response = await axios.post('/api/students/create-students', value, {
            headers:{
              Authorization:`Bearer ${token}`
            }
          })
          console.log('response',response)
          if(response.data.status){
            toast.success(response.data.message)
          } 
          if(response.data.status == false){
            toast.error(response.data.message)
          }
        } catch (error) {
          console.log(error)
         // toast.error('something went wrong')
        }
    }

  return (
    <div>
    <Form layout="vertical" onFinish={onFinish} initialValues={student}>
      <Row gutter={[10, 10]}>
        <Col span={8}>
          <Form.Item label="First Name" name="firstName">
            <input type="text" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Last Name" name="lastName">
            <input type="text" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Roll No" name="rollNo">
            <input type="number" disabled={type==='edit' ? true : false}/>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Email" name="email">
            <input type="text" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Phone Number" name="phoneNumber">
            <input type="text" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Class" name="class">
            <input type="number" />
          </Form.Item>
        </Col>
      </Row>
      <div className="d-flex justify-content-end mt-2">
        <button className="primary text-white px-5">Save</button>
      </div>
    </Form>
  </div>
  )
}

export default StudentForm
