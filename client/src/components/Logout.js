import React,{useEffect} from 'react'
import {useNavigate } from 'react-router-dom'
import { useGlobatContext } from '../context'

const Logout = () => {
  const {state, show,hide} = useGlobatContext();
  
  const navigate = useNavigate();

  const callLogout = async() => {
    try {
      const res = await fetch('/logout',{
        method:"GET",
        headers:{
          Accept:"application/json",
          'Content-Type':"application/json"
        },
        credentials:'include'
      })
  
      if(res.status === 200)
      {
        hide();
        navigate('/');
      }
    } catch (err) {
      console.log(err)
      
    }
    
  }

useEffect(() => {
  callLogout();
},[])

  return (
    <div>logout</div>
  )
}

export default Logout;