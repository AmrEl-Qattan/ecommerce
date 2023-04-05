import React from 'react'
import styles from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'


export default function ProductDetails() {
  const [productDetails, setProductDetails] = useState(null)

  let params = useParams();
  async function getProductDetails(id){
    let {data} = await axios.get('https://route-ecommerce.onrender.com/api/v1/products/${id}')
    setProductDetails(data.data);

  }

useEffect (()=> {
  getProductDetails(params.id);

},[])

  return (
    <>
    <div className="row py-3">
      <div className="col-md-4">

      </div>
      <div className="col-md-8">
        <h3>{productDetails?.title}</h3>

      </div>

    </div>
    
    
    </>
  )
}
