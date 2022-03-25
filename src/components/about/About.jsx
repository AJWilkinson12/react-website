import React from 'react'
import './about.css'
import ME from '../../assets/me_head.jpg'
import {MdOutlineWorkOutline} from 'react-icons/md'
import {MdSchool} from 'react-icons/md'
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
              <MdSchool className='about__icon'/>
              <h5>Education</h5>
              <small>Studied CS at Mizzou</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Personal Projects</h5>
              <small>5 and growing!</small>
            </article>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum explicabo aliquid aliquam ratione reprehenderit aut veritatis officia fuga, enim, sed non magnam ad error placeat recusandae magni. Dolorum, possimus earum?
          </p>

          <a href='#contact' className='btn btn-primary'>Contact Me!</a>
        </div>
      </div>
    </section>
  )
}

export default About