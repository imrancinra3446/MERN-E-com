import React from 'react'
import CarouselHero from './CarouselHero';
import Navigation from './Navigation';
import TopProduct from '../products/TopProduct';


const Home = () => {
  document.title = "E-Com MERN | Home"
  return (
    <div>
      <Navigation />
      <div className="container mt-2" >
        <CarouselHero />
      </div>
      <div className="container my-2">
        <h3 className='mt-4'>Top Products of This Week!</h3>
        <TopProduct />
      </div>
    </div>
  )
}

export default Home;
