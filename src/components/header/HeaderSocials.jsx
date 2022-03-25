import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href='https://www.linkedin.com/in/aj-wilkinson-93425316b/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/AJWilkinson12' target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href='https://twitter.com/JerryBot_' target="_blank" rel="noreferrer"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials