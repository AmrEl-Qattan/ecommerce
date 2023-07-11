import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

export let CartContext = createContext(0);

export default function CartContextProvider(props) {

    const [numberOfCartItems,setNumberOfCartItems] = useState()
    const [cartId,setcartId] = useState(null)

    useEffect(() => {
        getInitalValuse()
    },[])

    async function getInitalValuse(){
        let {data} = await getCart();
        if(data.status == "success"){
            setNumberOfCartItems(data.numberOfCartItems);
            setcartId(data.data._id)
        }

    }

    let headers = {token: localStorage.getItem("userToken")}

    function creatCart(productId){
       return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, 
        { productId: productId},
        {
            headers,
        }
        
        
        ).then(res => res)
        .catch(err => err)
    }

    function getCart(){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, 
         
         {
             headers,
         }
         
         
         ).then(res => res)
         .catch(err => err)
     }
 
    function updateCart(id,count){
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{count}, 
         
         {
             headers,
         }
         
         
         ).then(res => res)
         .catch(err => err)
     }

     function removeCartItem(id){
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
         
         {
             headers,
         }
         
         
         ).then(res => res)
         .catch(err => err)
     }

     function generateOnlinePayment(cartId,shippingAddress){
        return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,
        {shippingAddress:shippingAddress},
         
         {
             headers,
         }
         
         
         ).then(res => res)
         .catch(err => err)
     }
 
 

    const [cart,setCart,] = useState(0)
    return <CartContext.Provider value={{setNumberOfCartItems,numberOfCartItems,cartId,generateOnlinePayment,cart, creatCart, getCart,updateCart,removeCartItem}}>
        {props.children}
        </CartContext.Provider>
}