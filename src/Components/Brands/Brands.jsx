import React, { useEffect, useState } from 'react'
import styles from './Brands.module.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Brands() {

  const [allBrands, setallBrands] = useState([])
  const [isLoading, setisLoading] = useState(false)

 async function getBrands(){
  setisLoading(true);
  let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
  setallBrands(data.data);
  setisLoading(false)
}

useEffect(()=>{
  getBrands()
},[])



  return (
    <>
    <Helmet>
      <title>Brands</title>
    </Helmet>
    {isLoading? <div className='text-center'><i className='fas fa-spin fa-3x fa-spinner text-main'></i></div>:
    
    <div className="container mb-5 py-5">
      <div className="row">
        {allBrands.map((brand)=> <div key={brand._id} className='col-md-2'>

          <Link to={"/branddetails/"+brand._id}>
          <img className='w-100' src={brand.image} alt="" />
          </Link>
        </div>)}
      </div>
    </div>
    
    }
    
    
    </>
  )
}
