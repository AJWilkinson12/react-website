import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer__logo'>AJ WILKINSON</a>
      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/aj-wilkinson-93425316b/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/AJWilkinson12' target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href='https://twitter.com/JerryBot_' target="_blank" rel="noreferrer"><BsTwitter/></a>
      </div>
      <div className="footer__copywrite">
        <small>&copy; AJ Wilkinson</small>
      </div>
    </footer>
  )
}

export default Footer