import React, { useEffect, useState } from 'react'
import styles from './FeatureProducts.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function FeatureProducts() {
  const[allProducts,setAllProducts]= useState([])

  async function getProducts() {
   let {data} =  await axios.get('https://route-ecommerce.onrender.com/api/v1/products')
   setAllProducts(data.data)
  }

  useEffect(()=>{
    getProducts()

  },[])




  return (
   <>
   <div className="container mb-5 py-5">
    <div className="row">
      {allProducts.map((product)=><div key={product.id} className="col-md 2">
        <div className="product px-2 py-3 cursor-pointer">
          <Link to={`/productdetails/${product._id}`}>
          <img src={product.imageCover} className='w-100' alt="" />
          <p className='text-main'>{product.category.name}</p>
        <h3 className='h6'>{product.title.split(" ").splice(0,2).join(" ")}</h3>
        <div className="d-flex justify-content-between">
          <p>{product.price} EGP</p>
          <div >
          <i className='fa fa-star rating-color'></i>
          {product.ratingsAverage}
          </div>

        </div>
        <button className='btn bg-main text-white w-100'>+ Add</button>
        </Link>

        </div>
      
    </div>)}
      
    </div>
   </div>
   </>
  )
}
