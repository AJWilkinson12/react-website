import React, {useState, useEffect} from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import RingLoader from "react-spinners/RingLoader";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <div>
    {
      loading ? 
      <div className='Loader'>
        <RingLoader color={"#d93d2d"} loading={loading} size={100} />
      </div>
      :
      <><Header /><Nav /><About /><Experience /><Services /><Portfolio /><Contact /><Footer /></>
    }
    </div>
  )
}

export default App