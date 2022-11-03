import React from 'react'
import { Link , useNavigate} from 'react-router-dom';
import signupimg from "../images/signup.svg";
import { useFormik } from 'formik';
import { signUpSchema } from '../schema';

const initialValues = {
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cnf_password: "",
}

const Signup = () => {

    const style = { borderColor: "red" }

    const Formik = useFormik({
        initialValues, validationSchema: signUpSchema, onSubmit: (values, action) => {

            // console.log("I Im inside the formic onSubmit function ")
            // console.log(values)

            //Sending the data to the server by calling this function
            submitHandler(values);

            action.resetForm()   //Once form is submitted it will automatic reset the form <div className=""></div>

        }
    })


    // console.log(Formik);
    // console.log(Formik.errors)

    const navigate = useNavigate();

    const submitHandler = async (user) => {

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        const result = await res.json();
        if (result.status === 200) {
            alert('Register successfull')
            console.log(result)
            navigate('/login');

        }
        else {
            alert("something went wroung");
            console.log(result)
        }
    }





    return (
        <>
            <section className='signup-section'>
                <div className="container mt-5">
                    <div className='form-contant'>
                        <div className='form-data'>
                            <h2>SignUp</h2>
                            <form className='signup-form' method='post' onSubmit={Formik.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name"><i className="fa-solid fa-user form-icon"></i></label>
                                    <input style={Formik.errors.name && Formik.touched.name ? style : null} type="text" id='name' autoComplete='false' placeholder='Name' name='name' value={Formik.values.name} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                                    {/* <span className='formError'>Invalid name</span> */}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email"><i className="fa-solid fa-envelope form-icon"></i></label>
                                    <input style={Formik.errors.email && Formik.touched.email ? style : null} type="Email" id='email' autoComplete='false' placeholder='Email' name='email' value={Formik.values.email} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone"><i className="fa-solid fa-briefcase form-icon"></i></label>
                                    <input style={Formik.errors.phone && Formik.touched.phone ? style : null} type="text" id='phone' autoComplete='false' placeholder='Phone' name='phone' value={Formik.values.phone} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="work"><i className="fa-solid fa-phone form-icon"></i></label>
                                    <input style={Formik.errors.work && Formik.touched.work ? style : null} type="text" id='work' autoComplete='false' placeholder='i.e web-developer' name='work' value={Formik.values.work} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password"><i className="fa-solid fa-lock form-icon"></i></label>
                                    <input style={Formik.errors.password && Formik.touched.password ? style : null} type="password" id='password' autoComplete='false' placeholder='Password' name='password' value={Formik.values.password} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="cnf_password"><i className="fa-solid fa-lock from-icon"></i></label>
                                    <input style={Formik.errors.cnf_password && Formik.touched.cnf_password ? style : null} type="password" id='cnf_password' autoComplete='false' placeholder='cnf_password' name='cnf_password' value={Formik.values.cnf_password} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                                </div>
                                <div className="form-group">
                                    <button type='submit' className='btn btn-primary d-block m-auto btn-lg' >Register</button>
                                </div>
                            </form>
                        </div>
                        <div className='form-img'>
                            <picture>
                                <img src={signupimg} className='img-fluid' alt="img" />
                            </picture>
                            <span>Already have an account <Link to="/login"> LogIn</Link></span>
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Signup