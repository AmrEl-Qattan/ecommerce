import logo from './logo.svg';
import './App.css'
import { RouterProvider, createBrowserRouter,} from 'react-router-dom';
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Cart from './Components/Cart/Cart'
import Products from './Components/Products/Products'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import NotFound from './Components/NotFound/NotFound'
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes'
import {useEffect, useState} from 'react'
import jwtDecode from 'jwt-decode';
import CounterContextProvider from './Context/CounterContext';
import CartContextProvider, { CartContext } from './Context/CartContext';
import  { Toaster } from 'react-hot-toast';



 function App() {


  const [userData,setUserData] = useState(null)
  useEffect(() =>{
    if (localStorage.getItem("userToken")){
      saveUser()
    }

  }, [])


function saveUser(){
  let encodedToken = localStorage.getItem("userToken")
  let decoded = jwtDecode(encodedToken);
  setUserData(decoded);
  
}


const routes = createBrowserRouter ([
  {
    path:"",element :<Layout userData={userData} setUserData= {setUserData}/>,children:[
      {index: true, element: <ProtectedRoutes><Home/></ProtectedRoutes>},
      {path:"home", element : <ProtectedRoutes><Home/></ProtectedRoutes>},
      {path:"ecommerce", element : <ProtectedRoutes><Home/></ProtectedRoutes>},
      {path:"login", element : <Login saveUser={saveUser}/>},
      {path:"register", element : <Register/>},
      {path:"cart", element : <ProtectedRoutes><Cart/></ProtectedRoutes>},
      {path:"productdetails/:id", element : <ProtectedRoutes><ProductDetails/></ProtectedRoutes>},
      {path:"products", element :<ProtectedRoutes><Products/></ProtectedRoutes> },
      {path:"*", element : <NotFound/>},
    ],
  },
]);


  return ( 
  <CartContextProvider>
    <CounterContextProvider>
       <Toaster></Toaster>
      <RouterProvider router={routes}></RouterProvider>
      </CounterContextProvider>
      </CartContextProvider>
  
  );
  
   
  
}
export default App;
