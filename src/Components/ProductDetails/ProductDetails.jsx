import React, { useContext } from 'react'
import styles from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Slider from "react-slick";
import { CartContext } from '../../Context/CartContext'



export default function ProductDetails() {
  let {creatCart} = useContext(CartContext)
  let {id} = useParams()
  const [productDetails, setproductDetails] = useState({});
  const [isLoading, setisLoading] = useState(false)

  
  async function getproductDetails(){
    setisLoading(true);
    let {data} = await axios.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`)
    setproductDetails(data.data);
    setisLoading(false);

  }

useEffect (()=> {
  getproductDetails(id.id);

},[])
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};


  return (
    <>
    <div className="container">
      <div className="row justify-content-center py-3 align-items-center">
        {isLoading?
        <div className='text-center'><i className='fas fa-spin fa-3x fa-spinner text-main'></i></div>
        :<>
        
        <div className="col-md-4">
      <Slider {...settings}>
      {productDetails?.images?.map((img) =><div key={productDetails._id}> 
        <img  className='w-100' src={img} alt="" />
        
      </div>)}
    </Slider>
        {/* <img className='w-100' src={productDetails.imageCover} alt="" /> */}

      </div>
      <div className="col-md-8">
        <h3>{productDetails.title}</h3>
        <p>{productDetails.description}</p>
        <div className="d-flex justify-content-between">
          <p>{productDetails.price} EGP</p>
          <div >
          <i className='fa fa-star rating-color'></i>
          {productDetails.ratingsAverage}
          </div>

        </div>
        <button onClick={() => creatCart(productDetails._id)} className='btn bg-main text-white w-100'>+ Add</button>


      </div>

        </> }
    
      </div>
    
    </div>

    
    </>
  )
}
