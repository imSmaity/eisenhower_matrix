import React from 'react'
import { useSelector } from 'react-redux'
import './section1.css'


function Section1() {

  const state=useSelector(state=>state.updateToDo)

  return (
    <div className='section1'>
      <ul>
        
      </ul>
    </div>
  )
}

export default Section1