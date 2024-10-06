import React, { useContext, useEffect, useState } from 'react';
import styles from './Cart.module.css';
import { CounterContext } from '../../Context/CounterContext';
import { CartContext } from '../../Context/CartContext';
import { Offline, Online } from 'react-detect-offline';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import toast from "react-hot-toast";


export default function Cart() {
  const [cartDetails, setCartDetails] = useState({});
  const [isLoading, setisLoading] = useState(false);
  
  let { getCart, updateCart, removeCartItem } = useContext(CartContext);

  async function getCartDetails() {
    setisLoading(true);  // Start loading
    let res = await getCart();
    setCartDetails(res.data);
    setisLoading(false);  // Stop loading
  }

  async function updateCartHandler(id, count , action) {
    let res = await updateCart(id, count);
    setCartDetails(res.data);

    if(action === 'increment'){
      toast.success('Item added' , {
        position:'top-center'
      });
    }else if(action === 'decrement'){
      toast.success('Item removed' , {
        position:'top-center'
      })
    }
  }

  async function deleteCartHandler(id) {
    let res = await removeCartItem(id);
    setCartDetails(res.data);
    toast.success('Item Removed' , {
      position:'top-center'
    })
    
  }

  useEffect(() => {
    getCartDetails();
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cart</title>
      </Helmet>

      {/* <Online>
        <span className="network_status">You are online</span>
      </Online> */}
      <Offline>
        <span className="network_status">You are offline</span>
      </Offline>

      {isLoading ? (
        <div className="text-center">
          <i className="fas fa-spin fa-3x fa-spinner text-main"></i>
        </div>
      ) : (
        cartDetails && cartDetails.data && (
          <div className="container py-5 my-5">
            <div className="bg-main-light p-5">
              <h3>Cart Details</h3>
              <h4 className="mb-4">
                Total Price: <span className="text-main fw-bold">{cartDetails.data.totalCartPrice}</span>
              </h4>
              {cartDetails.data.products.map((product) => (
                <div key={product.product._id} className="row border-bottom border-bottom-danger p-2">
                  <div className="col-md-1">
                    <img src={product.product.imageCover} className="w-100" alt="" />
                  </div>
                  <div className="col-md-11 d-flex justify-content-between">
                    <div>
                      <h4>{product.product.title.split(' ').slice(0, 3).join(' ')}</h4>
                      <p className="text-main fw-bold">{product.price} EGP</p>
                      <button onClick={() => deleteCartHandler(product.product._id)} className="btn text-danger p-0">
                        <i className="fa fa-trash"></i> Remove
                      </button>
                    </div>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-cart bg-main text-white"       
                        onClick={() => updateCartHandler(product.product._id, product.count + 1, 'increment')}
                      >
                        +
                      </button>
                      <p className="mx-3 mb-0">{product.count}</p>
                      <button
                        className="btn btn-cart btn-danger text-white"
                        onClick={() => updateCartHandler(product.product._id, product.count - 1, 'decrement')}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <Link to="/checkout" className="btn bg-main text-white my-3">
                Proceed to Payment
              </Link>
            </div>
          </div>
        )
      )}
    </>
  );
}
