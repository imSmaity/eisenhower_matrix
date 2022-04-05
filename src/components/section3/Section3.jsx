import React from 'react'
import { useSelector } from 'react-redux'
import './section3.css'

function Section3() {
  const state=useSelector(state=>state.updateToDo)

  return (
    <div className='section3'>
      <ul>

      </ul>
    </div>
  )
}

export default Section3