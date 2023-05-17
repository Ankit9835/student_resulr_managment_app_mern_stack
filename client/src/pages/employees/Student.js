import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Table } from "antd";


const Student = () => {
    const navigate = useNavigate()
    const [students,setStudents] = useState([])
    const getStudents = async () => {
      try {
        let token = localStorage.getItem('token')
        const response = await axios.get('http://localhost:5000/api/students/get-all-students',{
          headers:{
            Authorization:`Bearer ${token}`
          }
        })
        if(response.data.status){
          toast.success(response.data.message)
          setStudents(response.data.data)
        }
        //console.log('response',response)
      } catch (error) {
        console.log(error)
        toast.error('something went wrong')
      }
    }

    useEffect(() => {
      getStudents()
    },[])

    const columns = [
      {
        title: "Class",
        dataIndex: "class",
        key: "class",
      },
      {
        title: "Roll No",
        dataIndex: "rollNo",
        key: "rollNo",
      },
      {
        title: "First Name",
        dataIndex: "firstName",
        key: "firstName",
      },
      {
        title: "Last Name",
        dataIndex: "lastName",
        key: "lastName",
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
      },
      {
        title: "Phone Number",
        dataIndex: "phoneNumber",
        key: "phoneNumber",
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <div className="d-flex gap-3">
            <i
              className="ri-delete-bin-line"
            ></i>
            <i
              className="ri-pencil-line"
            ></i>
          </div>
        ),
      },
    ];
    
  return (
    <div>
      <PageTitle title="Students" />
      <div className="d-flex justify-content-between align-items-center my-3">
        <input
          type="text"
          className="w-300 px-2"
          placeholder="search students"
        />
        <button
          className="primary text-white px-3"
          onClick={() => {
            navigate("/employee/students/add");
          }}
        >
          Add Student
        </button>
      </div>
      <Table columns={columns} dataSource={students} />
    </div>
  )
}

export default Student
