import React, { useEffect, useState } from 'react'
import styles from './BrandDetails.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Helmet } from 'react-helmet'


export default function BrandDetails() {

  let {id} = useParams()

  const [allBrandsDetails, setallBrandsDetails] = useState([])
  const [isLoading, setisLoading] = useState(false)

 async function getBrandsDetails(){
  setisLoading(true);
  let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
  setallBrandsDetails(data.data);
  setisLoading(false)
}

useEffect(()=>{
  getBrandsDetails()
},[])


  return (

    
   <>

    <Helmet>
      <title>{allBrandsDetails.name}</title>
    </Helmet>
    
   {isLoading? <div className='text-center'><i className='fas fa-spin fa-3x fa-spinner text-main'></i></div>:
   
   
   <div className="container mb-5 py-5 ">
    <div className="row align-items-center justify-content-center">

      <img className='w-50' src={allBrandsDetails.image} alt="" />
      <h3 className='text-center text-main'>{allBrandsDetails.name}</h3>

    </div>

   </div>
   
   }
   
   </>
  )
}
