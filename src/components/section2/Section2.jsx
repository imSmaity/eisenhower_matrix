import React from 'react'
import { useSelector } from 'react-redux'
import './section2.css'


function Section2() {
  const state=useSelector(state=>state.updateToDo)

  return (
    <div className='section2'>
      <ul>
        
      </ul>
    </div>
  )
}

export default Section2