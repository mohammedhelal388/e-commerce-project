import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import index from '../index.css'


export default function Navbar() {
    const state = useSelector((state) => state.handleCart)
    console.log(state)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-4" href="/">E-Commerce Website</a>
                  
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div id='nav'>
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-5">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>
                           
                        </ul>
                        </div>


                       
                    </div>
                      <div className='buttons'>
                          
                         
                           <button id='cart' className='btn' > 
                            <NavLink to="/cart" className='btn btn-outline-dark'>
                                <i className='fa fa-shopping-cart me-1'></i> Cart {state.length}</NavLink>
                           </button>
                           
                       </div>
                </div>
            </nav>

        </div>
    )
}
