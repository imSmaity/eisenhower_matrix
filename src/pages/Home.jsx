import React from 'react'
import './home.css'
import {
  Section1,
  Section2,
  Section3,
  Section4
} from '../components/index'


function Home() {
  return (
    <>
      <h3>Eisenhower matrix</h3>
      <div className='section-container'>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
      </div>
    </>
  )
}

export default Home