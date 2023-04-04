import React from 'react'
import styles from './NavBar.module.css'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container">
    <Link className="navbar-brand " to='home'>
      <img src={logo} alt="" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className='nav-link' to={''}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' to='products'>Products</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' to='cart'>Cart</Link>
        </li>
        
      </ul>

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className=''>
        <i className="fa-brands fa-facebook text-white"></i>
          </li>
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className=''>
        <i className="fa-brands fa-twitter text-white"></i>
          </li>
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className=''>
        <i className="fa-brands fa-instagram text-white"></i>
          </li>
      </ul>

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className='nav-link' to='login'>Login</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' to='register'>Register</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' to='logout'>LogOut</Link>
        </li>
        
      </ul>
    
    </div>
  </div>
</nav>
    
    </>
  )
}
