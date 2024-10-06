import React from 'react'
import styles from './Home.module.css'
import FeatureProducts from '../FeatureProducts/FeatureProducts'
import Categories from '../Categories/Categories'
import { Offline, Online } from "react-detect-offline";
import {Helmet} from "react-helmet";



export default function Home() {
  return (
    <>
           <Helmet>
                <meta charSet="utf-8" />
                <title>Fresh Cart</title>
                
            </Helmet>

     <Offline><span className='network_status'> Youe are offline </span></Offline>
    <Categories></Categories>
    <FeatureProducts></FeatureProducts>
    </>
  )
}
