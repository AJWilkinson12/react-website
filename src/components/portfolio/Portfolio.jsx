import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/IMG1.png'
import IMG2 from '../../assets/IMG2.jpeg'
import IMG3 from '../../assets/IMG3.jpeg'
import IMG4 from '../../assets/IMG4.jpeg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="img1"/>
          </div>
          <h3>A* Search Visualizer</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/AJWilkinson12/AStar_Algo_Visualizer" className='btn' target="_blank" rel="noreferrer">Github</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="img1"/>
          </div>
          <h3>Assuarnce Mobile App (Weapon Detection App)</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/TechForGoodInc/Assurance-Mobile-UI" className='btn' target="_blank" rel="noreferrer">Github</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="img1"/>
          </div>
          <h3>Sports betting client</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/AJWilkinson12/sports-odds-client" className='btn'>Github</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="img1"/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/sfbowen4/GoAdventure" className='btn'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio