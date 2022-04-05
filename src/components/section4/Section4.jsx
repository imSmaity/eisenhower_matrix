import React from 'react'
import { useSelector } from 'react-redux';
import './section4.css';

function Section4() {
  const state=useSelector(state=>state.updateToDo)

  return (
    <div className='section4'>
      <ul>
        
      </ul>
    </div>
  )
}

export default Section4