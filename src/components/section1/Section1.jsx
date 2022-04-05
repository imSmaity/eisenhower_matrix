import React from 'react'
import { useSelector } from 'react-redux'
import {Li} from '../index'
import './section1.css'


function Section1() {

  const state=useSelector(state=>state.updateToDo)

  return (
    <div className='section1'>
      <ul>
        {
          state.section1.map(({item,id})=>{
            return <Li item={item} key={id}/>
          })
        }
      </ul>
    </div>
  )
}

export default Section1