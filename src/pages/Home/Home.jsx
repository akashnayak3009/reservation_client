import React from 'react'
import '../assets/Home_module.css';
import {Navbar,Header,Featured,PropertyList,MailList,Footer,FeaturedProperties} from '../../components/index.js'


const Home = () => {
  return (
    <div>
    <Navbar />
    <Header/>
    <div className="homeContainer">
      <Featured/>
      <h1 className="homeTitle">Browse by property type</h1>
      <PropertyList/>
      <h1 className="homeTitle">Homes guests love</h1>
      <FeaturedProperties/>
      <MailList/>
      <Footer/>
    </div>
  </div>
  )
}

export default Home