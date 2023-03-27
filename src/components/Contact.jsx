import React from 'react'
import '../Pages/Pages.css'
import telephone from '../assets/Images/telephone.png'
import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { MdSignalWifiConnectedNoInternet0 } from 'react-icons/md'

const Contact = () => {

  const [submit, setSubmitted] = useState("false")


  useEffect(() => {
    const timer = setTimeout(() => {
      setSubmitted("false")
    }, 3000)

    return () => clearTimeout(timer)
  }, [submit])


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1xzqtlh', 'template_oljgyha', form.current, 'BLLsOFvUMfZ6fbN5U')
      .then((result) => {
        console.log(result.text);
        setSubmitted("true")
      }, (error) => {
        console.log(error.text);
        setSubmitted("error")
      });

    e.target.reset()
  };


  return (
    <div className=' contact container'>
      <div className='contact__img'>
        <img src={telephone} alt='' loading='lazy' className='img' />
      </div>


      <form className='contact__form' ref={form} onSubmit={sendEmail}>

        <div className='contact__form-group '>

          <div className='contact__form-div'>
            <input name='name' type="text" placeholder='Name' className='conatct__form-input' required />
          </div>

          <div className='contact__form-div'>
            <input name='email' type="email" placeholder='Email' className='conatct__form-input' required />
          </div>
        </div>


        <div className='contact__form-div'>
          <input name='subject' type="text" placeholder='Subject' className='conatct__form-input' required />
        </div>

        <div className='contact__form-div contact__form-area'>
          <textarea name='message' cols='30' rows='10' className='conatct__form-input' placeholder='Write Your Message' required />
        </div>


        <input className="btn btn--2" type='submit' value={submit === "true" ? "Sent" : "Dispatch"} />

        <motion.span className={submit === "error" ? 'error__message' : "error-message"}

          initial={{ y: "-30%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.5, delay: 1, type: "spring", stiffness: 500, ease: "easeInOut" }}

        > <MdSignalWifiConnectedNoInternet0 /> Network Error</motion.span>

      </form>


    </div>
  )
}

export default Contact