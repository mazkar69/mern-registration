import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';

const About = () => {
  const [user,setUser] = useState({})

  const navigate = useNavigate();

  async function callAboutPage() {
    try {


      const res = await fetch("/about", {
        method: 'GET',
        headers: {
          Accept: "application/json",
          'Content-Type': 'application/json'
        },
        credentials: 'include'      //To send the cookie in backend.
      })
      
      if(res.status !== 200)
      {
        navigate('/login');
      }
      else{

        const userData = await res.json()
        // console.log(userData);
        setUser(userData);
      }

    }catch(error)
    {
      console.log(error)
    } 
  }

  useEffect(() => {
    callAboutPage();

  })

  return (
    <div className="about-section">
      <div className="container mt-5">
        <div className="about-box">
          <div className="about-img">
            <picture>
              <img src={logo} alt="logo" />
            </picture>
            <div className="name-data">
              <h5 >{user.name}</h5>
              <span>{user.work}</span>
            </div>
            <i className="fa-regular fa-pen-to-square"></i>
          </div>
          <div className="about-data">
            <div className="about-title">
              <h5 className='about-titile'>Information</h5>
            </div>
            <div className="data email-phone-data">
              <div className="l-data">
                <h5>Email</h5>
                <span className='email'>{user.email}</span>
              </div>
              <div className="r-data">
                <h5>Phone</h5>
                <span className='phone'>{user.phone}</span>
              </div>
            </div>

            <div className="about-title">
              <h5 className='about-titile'>Projects</h5>
            </div>

            <div className="data recent-data">
              <div className="l-data">
                <h5>Recent</h5>
                <span className='email'>Chat App</span>
              </div>
              <div className="r-data">
                <h5>Most Viewed</h5>
                <span className='freecourse'>FreeCourse</span>
              </div>

            </div>

            <div className="social">
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default About