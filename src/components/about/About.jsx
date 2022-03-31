import React from 'react'
import './about.css'
import ME from '../../assets/me_head.jpg'
import {MdOutlineWorkOutline} from 'react-icons/md'
import {GiTigerHead} from 'react-icons/gi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About pic" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <MdOutlineWorkOutline className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>
            <article className='about__card'>
              <GiTigerHead className='about__icon'/>
              <h5>Education</h5>
              <small>Studied Computer Science at Mizzou</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Personal Projects</h5>
              <small>5 and growing!</small>
            </article>
          </div>
          <p>
            I studied Computer Science at the University of Missouri. Skilled in both Frontend and Backend Development, and very quick to learn and adapt to new languages. I am a very eager Software Engineer ready to take on new tasks and challenges.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About