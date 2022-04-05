import React from 'react'
import { useSelector } from 'react-redux'
import './section3.css'
import {Li} from '../index'

function Section3() {
  const state=useSelector(state=>state.updateToDo)

  return (
    <div className='section3'>
      <ul>
        {
          state.section3.map(({item,id})=>{
            return <Li item={item} key={id}/>
          })
        }
      </ul>
    </div>
  )
}

export default Section3