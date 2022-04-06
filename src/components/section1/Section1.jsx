import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { useSelector } from 'react-redux'
import './section1.css'


function Section1() {

  const state=useSelector(state=>state.updateToDo)

  return (
    <div className='sections1'>
      <ul>
        {
          state.section1.map(({item,id},index)=>{
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

export default Section1