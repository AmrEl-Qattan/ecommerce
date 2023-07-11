import React, { useState } from "react";
import styles from "./Register.module.css";
import * as Yup from 'yup'
import { Formik, useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";


export default function Register() {
  const [isLoading,setIsLoading] = useState(false)
  const [errorMessage,setErrorMessage] = useState(null)
  let navigate = useNavigate()

async function register (values) {
  setIsLoading(true)
  setErrorMessage(null)
 let {data} =await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',values).catch((err)=>{
  console.log(err)
  setIsLoading(false)
  setErrorMessage(err.response.data.errors.msg)
 })


  if (data.message == "success"){
    setIsLoading(false)
    navigate("/login")

  }
}
let mySchema = Yup.object({
name:Yup.string().required('name is required').min(3 , 'name minlength is 3').max(10 , 'name maxlength is 10'),
email:Yup.string().required('email is required').email('email is invalid'),
password:Yup.string().required('password is required').matches(/^[A-Z][a-z0-9]{5,10}$/ , 'password must start with Uppercase'),
rePassword:Yup.string().required('rePassword is required').oneOf([Yup.ref('password')] , 'password and rePassword dosnt matches'),
phone:Yup.string().required('Phone is required').matches(/^01[0125][0-9]{8}$/ , 'phone must be valid number'),
})

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema:mySchema,
    onSubmit: (values) => register(values)
  });
  return (

    <><Helmet>
    <meta charSet="utf-8" />
    <title>Register</title>
    
  </Helmet>

    <div className="container my-5">
      <h3>Register Now :</h3>
      {errorMessage ? <div className="alert alert-danger"> {errorMessage} </div> : ''}

      <form className="pb-5" onSubmit={formik.handleSubmit}>
        <label className="mb-2" htmlFor="name">Name:</label>
        <input
          type="text"
          className="form-control mb-2"
          id="name"
          name="name"
          value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}
        />

        
          {formik.errors.name && formik.touched.name?<div className="alert alert-danger">{formik.errors.name}</div> : '' }
        
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
        <label className="mb-2" htmlFor="rePassword">rePassword:</label>
        <input
          type="password"
          className="form-control mb-2"
          id="rePassword"
          name="rePassword"
          value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur}
        />
        {formik.errors.rePassword && formik.touched.rePassword ?<div className="alert alert-danger">{formik.errors.rePassword}</div> : '' }
        <label className="mb-2" htmlFor="phone">Phone:</label>
        <input
          type="tel"
          className="form-control mb-2"
          id="phone"
          name="phone"
          value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}
        />
        {formik.errors.phone && formik.touched.phone ?<div className="alert alert-danger">{formik.errors.phone}</div> : '' }

          {isLoading ? <button className="btn bg-main text-white"><i className='fa fa-spin fa-spinner'></i></button> :  <button disabled={!(formik.isValid && formik.dirty)} className="btn bg-main text-white">Register</button>}
       
        
      </form>
    </div>
    </>
  );
}
