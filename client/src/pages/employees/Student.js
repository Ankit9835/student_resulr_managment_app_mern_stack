import React from 'react'
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';


const Student = () => {
    const navigate = useNavigate()
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
    
    </div>
  )
}

export default Student
