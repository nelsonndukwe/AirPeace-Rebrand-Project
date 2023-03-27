import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/Images/Air-peace-Logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { ImFacebook } from 'react-icons/im'
import { AiOutlineYoutube, AiOutlineLinkedin} from 'react-icons/ai'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { MdOutlineCancel } from 'react-icons/md'


const Header = () => {
  const [open, setOpen] = useState(true)
  const navigate = useNavigate()



  return (
    <>
      <div className='main__conatiner container'>
        <div className='nav__logo flex'>
          <img src={Logo} alt='logo' className='logo__image' />
        </div>

        <div className=' nav__menu'>
          <div className='nav__menue_list'>
            <span className='flex  nav__items'>Language</span>
            <Link className='flex nav__items' to=''>LogIn</Link>
            <Link className='flex nav__items' to=''>SignUp</Link>

          </div>
          <div className='flex'>
            <span className='nav__profile-icon' onClick={() => setOpen(prevState => !prevState)} >{open ? <AiOutlineMenu /> : <MdOutlineCancel />}</span>
          </div>
        </div>


      </div>

      <div className={open ? "main__items" : "open"}>
        <div className='items__links' >
          <Link to='/' onClick={() => setOpen(true)}><span>Home</span></Link>
          <Link to='/peace-advantage' onClick={() => setOpen(true)}><span>Peace Advantage</span> </Link>
          <Link to='/gallary' onClick={() => setOpen(true)}><span>Gallary</span></Link>
          <Link to='/career' onClick={() => setOpen(true)}><span>Careers</span></Link>
          <Link to='/about' onClick={() => setOpen(true)}><span>About Us</span></Link>
        </div>

        <div className='social__links flex'>
          <a href='https://web.facebook.com/flyairpeace?_rdc=1&_rdr' target='_blank'><ImFacebook /></a>
          <a href='https://www.linkedin.com/company/air-peace-limited/' target='_blank' ><AiOutlineLinkedin /></a>
          <a href='https://www.youtube.com/channel/UCRj5a85rt5CPLqWzsNnT7AA' target='_blank'><AiOutlineYoutube /></a>
          <a href='https://twitter.com/flyairpeace' target='_blank'><BsTwitter /></a>
          <a href='https://www.instagram.com/flyairpeace/' target='_blank'><BsInstagram /></a>

        </div>




      </div>


    </>


  )
}

export default Header