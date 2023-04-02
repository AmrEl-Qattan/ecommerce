import React from 'react'
import styles from './NotFound.module.css'
import errorImg from '../../assets/images/error.svg'

export default function NotFound() {
  return (
    <>
    <div className="container">
      <div className='w-50 mx-auto my-5'>
      <img src={errorImg} alt="" />
      </div>
    </div>
    </>
  )
}
