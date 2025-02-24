import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useGlobatContext } from '../context'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const { state, show, hide } = useGlobatContext();

    return (
        <>

            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Dazz's</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <NavLink className="nav-link  " aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink className="nav-link " aria-current="page" to="/about">AboutMe</NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink className="nav-link " aria-current="page" to="/contact">Contact</NavLink>
                            </li>


                            {state ? <> <li className="nav-item mx-3">
                                <NavLink className="nav-link " aria-current="page" to="/logout">Logout</NavLink>
                            </li> </> : <> <li className="nav-item mx-3">
                                <NavLink className="nav-link " aria-current="page" to="/login">Login</NavLink>
                            </li>
                                <li className="nav-item mx-3">
                                    <NavLink className="nav-link " aria-current="page" to="/signup">Register</NavLink>
                                </li></>

                            }

                        </ul>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;