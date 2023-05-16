import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DefaultLayout from './DefaultLayout';
import { useDispatch } from 'react-redux';
import { setEmployee } from '../redux/employeeSlice';


const ProtectectedRoute = (props) => {
 const [readyToRednder, setReadyToRednder] = useState(false);
 const dispatch = useDispatch()
 const navigate = useNavigate()
 const getEmployeeData = async () => {
    try {
        let token = localStorage.getItem('token')
        const response = await axios.post('/api/employee/get-employee-by-id',{},{
            headers: {
                Authorization: `Bearer ${token}`,
              },
        })
        console.log('protected',response)
        if(response.data.status){
            dispatch(setEmployee(response.data.data))
            setReadyToRednder(true)
        }
    } catch (error) {
       // localStorage.removeItem('token')
        navigate('/')
    }
 }

 useEffect(() => {
    getEmployeeData()
 },[])

  return readyToRednder && 
    props.children
 
}

export default ProtectectedRoute
