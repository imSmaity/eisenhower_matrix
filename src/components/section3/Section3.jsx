import React from 'react'
import { useSelector } from 'react-redux'
import './section3.css'
import {Li} from '../index'
import { Draggable } from 'react-beautiful-dnd'

function Section3() {
  const state=useSelector(state=>state.updateToDo)

  return (
    <div className='sections3'>
      <ul>
        {
          state.section3.map(({item,id},index)=>{
            return (
              <Draggable key={id} draggableId={id} index={index}>
                {(provided) => (
                  <li 
                    ref={provided.innerRef} 
                    {...provided.draggableProps} 
                    {...provided.dragHandleProps} 
                  >{item}</li>
                )}
              </Draggable>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Section3