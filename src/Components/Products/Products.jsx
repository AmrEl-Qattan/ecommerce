import React, { useContext } from 'react'
import styles from './Products.module.css'
import { CounterContext } from '../../Context/CounterContext'
import {Helmet} from "react-helmet";


export default function Products() {
  let {Increment,decrement} = useContext(CounterContext)

  return (

    <>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Product</title>
                
            </Helmet>

    
    <div>Products</div>
    
    </>
    
  )
}
