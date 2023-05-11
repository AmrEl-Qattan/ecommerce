import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'
import toast from 'react-hot-toast'
import {Helmet} from "react-helmet";



export default function Contact() {
  const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_xk19n3m', 'template_43c9mfa', form.current, 'BDCesUCrZJ4QlObj3')
        .then((result) => {
            console.log(result.text);
            toast.success("Your Message Sent Successfuly !", {className:"mt-5 fw-bold "})
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
  


  return (
    <>

<Helmet>
                <meta charSet="utf-8" />
                <title>Contact</title>
                
            </Helmet>
    {/* <section >
      <div classNameName="container ">
        <h2 classNameName='text-center'>Contact us </h2>
        <form ref={form} onSubmit={sendEmail} classNameName='form-control '>
          <input type="text" placeholder='Full Name' name='user_name' required/>
          <br />
          <br />
          <input type="email" placeholder='Your Email' name='user_email' required/>
          <br />
          <br />
          <input type="tel" placeholder='Your Phone' name='user_phone' required/>
          <br />
          <br />
          <input type="text" placeholder='Subject' name='subject' required/>
          <br />
          <br />
          <textarea name="message" id="" cols="30" rows="10" ></textarea>
          <br />
          <br />
          <button type='sumbit' classNameName='btn btn-success'>Send Messgae</button>

        </form>
      </div>
    </section> */}



<div className="contact" id="contact">
      <div className="container">
        <div className="title">
          <h2>Contact Us</h2>
          <div className="border"></div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-area">
          <div className="data-form">
            <input
              type="text"
              name="user_name"
              autoComplete="off"
              placeholder="Name"
              required
            />
          </div>

          <div className="data-form">
            <input
              type="email"
              name="user_email"
              autoComplete="off"
              placeholder="Email"
              required
            />
          </div>
          <div className="data-form">
            <input
              type="tel"
              name="user_phone"
              autoComplete="off"
              placeholder="Phone"
              required
            />
          </div>

          <div className="data-form">
            <input
              type="text"
              name="subject"
              autoComplete="off"
              placeholder="Subject"
              required
            />
          </div>

          <div className="data-form">
            <textarea
              name="message"
              placeholder="Message for me"
              autoComplete="off"
              required
            ></textarea>
          </div>

          <div className="clr"></div>

          <button className='btn bg-main text-white w-100' type="submit">send message</button>
        </form>
      </div>
    </div>
    </>
  )
  
}


