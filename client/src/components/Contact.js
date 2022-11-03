import React from 'react'
import { useState } from 'react'
const Contact = () => {



  const [msgdata, setMsgdata] = useState(
    {
      name: "",
      email: "",
      phone: "",
      msg: "",

    }
  )

  const inputHandler = (e) => {

    let name, data;
    name = e.target.name;
    data = e.target.value;

    setMsgdata({
      ...msgdata,
      [name]: data,
    })

  }

  function submitHandler(e) {
    e.preventDefault();

    console.log(msgdata);
  }
  return (
    <section className='contact-section'>
      <div className="container mt-3">
        <div className="address-boxes">

          <div className="address-box">

            <i className="fa-solid fa-mobile contact-icon"></i>
            <div className="address-data">
              <h6>Phone</h6>
              <span>+918840375826</span>
            </div>

          </div>
          <div className="address-box">

            <i className="fa-solid fa-lock contact-icon"></i>
            <div className="address-data">
              <h6>Email</h6>
              <span>mazkar@developer.com</span>
            </div>

          </div>
          <div className="address-box">

            <i className="fa-solid fa-map-location-dot contact-icon"></i>
            <div className="address-data">
              <h6>Address</h6>
              <span>Laxmi Nager, Delhi</span>
            </div>

          </div>
        </div>

      </div>

      <div className="container mt-5">
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form action="https://formspree.io/f/xayvzezb"
            method="POST" className='form'>
            <div className="input-form">
              <input type="text" name='name' placeholder='Name' autoCapitalize='false' value={msgdata.name} onChange={inputHandler} />
            </div>
            <div className="input-form">
              <input type="email" name='email' placeholder='Email' value={msgdata.email} onChange={inputHandler} />
            </div>
            <div className="input-form">
              <input type="text" name='phone' placeholder='Phone' value={msgdata.phone} onChange={inputHandler} />
            </div>
            <div className="input-form" id="text-area">
              <textarea name="msg" rows="5" className='textarea' placeholder='Type your message...' value={msgdata.msg} onChange={inputHandler}></textarea>
            </div>
            <div className="input-form">
              <button type="submit" className='btn btn-primary' onClick={submitHandler}>Send Message</button>
            </div>

          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact