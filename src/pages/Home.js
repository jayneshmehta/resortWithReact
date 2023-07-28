import React from 'react'
import Hero from '../components/Hero.js'
import Banner from '../components/Banner.js';
import { Link } from 'react-router-dom';
import Services from '../components/Services.js';
import FeaturedRooms from '../components/FeaturedRooms.js';

export default function Home() {

  return (
    <>
      <Hero>
        <Banner title="luxarious rooms" subtitle="deluxe rooms starting at 999">
          <Link to="/rooms" className='btn-primary' >Our Rooms</Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms></FeaturedRooms>
    </>
  )
}
