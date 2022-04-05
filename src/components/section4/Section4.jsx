import React from 'react'
import { useSelector } from 'react-redux';
import './section4.css';
import {Li} from '../index'

function Section4() {
  const state=useSelector(state=>state.updateToDo)

  return (
    <div className='section4'>
      <ul>
        {
          state.section4.map(({item,id})=>{
            return <Li item={item} key={id}/>
          })
        }
      </ul>
    </div>
  )
}

export default Section4