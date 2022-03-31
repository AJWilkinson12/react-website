import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      
      <div className="container services__container">
        
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I have taken courses in web development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I made this very website using React</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I have built websites for multiple clients.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Always looking to help develop websites for others.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEV */}
        <article className='service'>
          <div className="service__head">
            <h3>Mobile Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I have helped develop a couple mobile applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I am certifed by Mizzou in Mobile and Web Application Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Very interested in working with Swift and Kotlin</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Always willing to help develop applications for others.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>

  )
}

export default Services