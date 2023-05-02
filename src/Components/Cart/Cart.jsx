import React, { useContext, useEffect, useState } from 'react'
import styles from './Cart.module.css'
import { CounterContext } from '../../Context/CounterContext'
import { CartContext } from '../../Context/CartContext'


export default function Cart() {
  const [cartDetails, setCartDetails] = useState({})

  let {getCart,updateCart,removeCartItem} = useContext(CartContext)
  

 async function getCartDetails(){
 let res =  await getCart()
 setCartDetails(res.data)

  }

 async function updateCartHandler(id,count){
 let res =  await updateCart(id,count)
 setCartDetails(res.data)

  }

  async function deleteCartHandler(id){
    let res =  await removeCartItem(id)
    setCartDetails(res.data)
   
     }

  useEffect (() => {
    getCartDetails()
  },[])
  return (
    <>

    { cartDetails && cartDetails.data && <div className="container py-5 my-5">
      <div className="bg-main-light p-5">
      <h3>Cart Details</h3>
      <h4>Total Price : { cartDetails.data.totalCartPrice}</h4>
      {cartDetails.data.products.map((product) => <div key={product.product._id}  className='row border-bottom border-bottom-danger p-2'>
        <div className="col-md-1">
          <img src={product.product.imageCover} className='w-100' alt="" />
        </div>
        <div className="col-md-11 d-flex justify-content-between">
          <div>
          <h4>{product.product.title}</h4>
          <p className='text-main'>{product.price} EGP</p>
          <button onClick={ ()=> deleteCartHandler(product.product._id)} className='btn text-danger'> <i className='fa fa-trash'></i> Remove</button>

          </div>
          <div className='d-flex align-items-center'>
            <button className='btn btn-cart bg-main text-white' onClick={() =>updateCartHandler(product.product._id,product.count+1) }>+</button>
            <p className='mx-3 mb-0'>{product.count}</p>
            <button className='btn btn-cart btn-danger text-white' onClick={() =>updateCartHandler(product.product._id,product.count-1) }>-</button>

          </div>
        </div>
        
        
        </div>)}
      </div>
    </div>}
    
    
    </>
  )
}
