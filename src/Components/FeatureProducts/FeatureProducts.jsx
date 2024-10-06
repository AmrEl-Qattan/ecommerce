import React, { useContext, useEffect, useState } from 'react'
import styles from './FeatureProducts.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast';
import { BallTriangle } from 'react-loader-spinner'



export default function FeatureProducts() {

  let {creatCart} = useContext(CartContext)
  const[allProducts,setAllProducts]= useState([])
  const [isLoading, setisLoading] = useState(false)

  async function getProducts() {
    setisLoading(true);
   let {data} =  await axios.get('https://ecommerce.routemisr.com/api/v1/products')
   setAllProducts(data.data);
   setisLoading(false)
  }

 async function generateCart(productId){
   let response = await creatCart(productId)
   if(response.data.status == "success"){
    toast.success(response.data.message, {
      position:"bottom-right",
      className: "text-center border-success border-2"
    })

   }

  }
  useEffect(()=>{
    getProducts()

  },[])




  return (
   <>

   {isLoading ? <div className='text-center'><i className='fas fa-spin fa-3x fa-spinner text-main'></i></div>: <div className="container mb-5 py-5">
    <div className="row">
      {allProducts.map((product)=><div key={product.id} className="col-md-2">
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
        
        </Link>
        <button onClick={() => generateCart(product._id)} className='btn bg-main text-white w-100'>+ Add</button>

        </div>
      
    </div>)}
      
    </div>
   </div>}
  
   </>
  )
}
