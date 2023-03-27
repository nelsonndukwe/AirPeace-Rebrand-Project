import React from 'react'
import './Footer.css'

import { Link, useNavigate } from 'react-router-dom'
import { ImFacebook } from 'react-icons/im'
import { AiOutlineYoutube, AiOutlineLinkedin } from 'react-icons/ai'
import { BsTwitter, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='footer '>
      <div className='footer__conatiner container'>










        <div className='social__links flex'>
          <a href='https://web.facebook.com/flyairpeace?_rdc=1&_rdr' target='_blank'><ImFacebook /></a>
          <a href='https://www.linkedin.com/company/air-peace-limited/' target='_blank' ><AiOutlineLinkedin /></a>
          <a href='https://www.youtube.com/channel/UCRj5a85rt5CPLqWzsNnT7AA' target='_blank'><AiOutlineYoutube /></a>
          <a href='https://twitter.com/flyairpeace' target='_blank'><BsTwitter /></a>
          <a href='https://www.instagram.com/flyairpeace/' target='_blank'><BsInstagram /></a>

        </div>

      </div>

    </footer>
  )
}

export default Footer