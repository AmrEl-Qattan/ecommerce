import React, { useState } from "react";
import styles from './Login.module.css'
import * as Yup from 'yup'
import { Formik, useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Register from "../Register/Register";

export default function Login({saveUser})
 { const [isLoading,setIsLoading] = useState(false)
  const [errorMessage,setErrorMessage] = useState(null)
  let navigate = useNavigate()

async function login (values) {
  setIsLoading(true)
  setErrorMessage(null)
 let {data} =await axios.post('https://route-ecommerce.onrender.com/api/v1/auth/signin',values).catch((err)=>{
  console.log(err)
  setIsLoading(false)
  setErrorMessage(err.response.data.message)
 })


  if (data.message == "success"){
    setIsLoading(false)
    localStorage.setItem("userToken", data.token)
    saveUser()
    navigate("/")

  }
}
let mySchema = Yup.object({
email:Yup.string().required('email is required').email('email is invalid'),
password:Yup.string().required('password is required').matches(/^[A-Z][a-z0-9]{5,10}$/ , 'password must start with Uppercase'),
})

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema:mySchema,
    onSubmit: (values) => login(values)
  });
  return (
    <div className="container my-5">
      <h3>Login Now :</h3>
      {errorMessage ? <div className="alert alert-danger"> {errorMessage} </div> : ''}

      <form className="pb-5" onSubmit={formik.handleSubmit}>
     
        
        
        <label className="mb-2" htmlFor="email">Email:</label>
        <input
          type="email"
          className="form-control mb-2"
          id="email"
          name="email"
          value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email ?<div className="alert alert-danger">{formik.errors.email}</div> : '' }
        <label className="mb-2" htmlFor="password">Password:</label>
        <input
          type="password"
          className="form-control mb-2"
          id="password"
          name="password"
          value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}
        />
        {formik.errors.password && formik.touched.password ?<div className="alert alert-danger">{formik.errors.password}</div> : '' }
        
        
          {isLoading ? <button className="btn bg-main text-white "><i className='fa fa-spin fa-spinner'></i></button> :  <button className="btn bg-main text-white m-1">Login</button>}
          {isLoading ? <button className="btn bg-main text-white"><i className='fa fa-spin fa-spinner'></i></button> :  <Link to='/register'><button className="btn bg-main text-white">Register</button></Link>}
       
        
      </form>
    </div>
  );
}

