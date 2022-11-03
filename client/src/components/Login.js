import React from 'react'
import { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { useGlobatContext } from '../context'
import { useFormik } from 'formik'
import signupimg from '../images/Work_7.jpg'
import '../App.css'

const Login = () => {

  const initialValues = {
    email:"",
    password:"",
  }

  const Formik = useFormik({initialValues,onSubmit:(value,action)=>{
    // console.log(value)
    submitHandler(value);
    action.resetForm();
  }})

  const {state,show,hide} = useGlobatContext();
  const navigate = useNavigate();

  async function submitHandler(user)
  {

    // console.log(user);
    const res = await fetch('/signin',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(user)
    })

    const result = await res.json();
    if(result.status === 200){

      alert("Log in successfull")
      show();
      navigate('/')
    }
    else{
      alert("Invalid Credentials")

    }

  }

  return (
    <>
      <section className='signup-section'>
        <div className="container mt-5">
          <div className='form-contant'>

            <div className='form-img'>
              <picture>
                <img src={signupimg} className='img-fluid' alt="img" />
              </picture>
              <span>Don't have an account <Link to="/signup"> Register</Link></span>
            </div>


            <div className='form-data'>
              <h2>Login</h2>
              <form className='signup-form' method='post' onSubmit={Formik.handleSubmit}>


                <div className="form-group">
                  <label htmlFor="email"><i className="fa-solid fa-envelope form-icon"></i></label>
                  <input type="Email" id='email' autoComplete='false' placeholder='Email' name='email' value={Formik.values.email} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                </div>


                <div className="form-group">
                  <label htmlFor="password"><i className="fa-solid fa-lock form-icon"></i></label>
                  <input type="password" id='password' autoComplete='false' placeholder='Password' name='password' value={Formik.values.password} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                </div>

                <div className="form-group">
                  <button className='btn btn-primary d-block  btn-lg' type='submit'>Log in</button>
                </div>
              </form>
            </div>


          </div>

        </div>

      </section>
    </>
  )
}

export default Login