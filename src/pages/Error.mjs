import React from 'react'
import Hero from '../components/Hero.js'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner.js'

export default function Error() {
  return (
    <Hero>
      <Banner title='404' subtitle='Page not found'>
        <Link to='/' className='btn-primary'>
          return home
        </Link>
      </Banner>
    </Hero>
  )
}
