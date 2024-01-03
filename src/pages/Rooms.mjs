import React from 'react'
import Hero from '../components/Hero.js'
import Banner from '../components/Banner.js'
import { Link } from 'react-router-dom'
import RoomContainer from '../components/RoomContainer.js';

export default function Rooms() {
  return (
    <>
    <Hero hero='roomsHero' >
      <Banner title='Our Rooms' subtitle=''>
        <Link to='/' className='btn-primary'>
          return home
        </Link>
      </Banner>
    </Hero>
    <RoomContainer/>
    </>
  )
}
