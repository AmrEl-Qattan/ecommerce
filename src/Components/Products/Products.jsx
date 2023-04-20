import React, { useContext } from 'react'
import styles from './Products.module.css'
import { CounterContext } from '../../Context/CounterContext'

export default function Products() {
  let {Increment,decrement} = useContext(CounterContext)

  return (

    <>
    <div>Products</div>
    
    </>
    
  )
}
