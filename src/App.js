import logo from './logo.svg';
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Cart from './Components/Cart/Cart'
import Products from './Components/Products/Products'
import NotFound from './Components/NotFound/NotFound'

const routes = createBrowserRouter ([
  {
    path:"/",element :<Layout/>,children:[
      {index: true, element: <Home/> },
      {path:"login", element : <Login/>},
      {path:"register", element : <Register/>},
      {path:"cart", element : <Cart/>},
      {path:"products", element : <Products/>},
      {path:"*", element : <NotFound/>},
    ],
  },
]);

 function App() {
  return <RouterProvider router={routes}></RouterProvider>
   
  
}
export default App;
