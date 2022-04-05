import React from 'react'
import { useSelector } from 'react-redux'
import './section2.css'
import {Li} from '../index'

function Section2() {
  const state=useSelector(state=>state.updateToDo)

  return (
    <div className='section2'>
      <ul>
        {
          state.section2.map(({item,id})=>{
            return <Li item={item} key={id}/>
          })
        }
      </ul>
    </div>
  )
}

export default Section2