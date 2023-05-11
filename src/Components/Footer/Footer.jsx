import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <>
    <footer className='bg-dark position-fixed fixed-bottom py-2 text-white text-center'>
      <h3 className='fs-5'>Copyright &#169; 2023 All rights reserved | Design by <Link className='text-success' target={"_blank"} to={'https://www.facebook.com/2mr.Elkattan'}>Amr El-Qattan</Link></h3>
    </footer>
    </>
  )
}
