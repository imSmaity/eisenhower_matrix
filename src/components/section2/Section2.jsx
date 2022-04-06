import React from 'react'
import { useSelector } from 'react-redux'
import './section2.css'
import { Draggable } from 'react-beautiful-dnd'

function Section2() {
  const state=useSelector(state=>state.updateToDo)

  return (
    <div className='sections2'>
      <ul>
        {
          state.section2.map(({item,id},index)=>{
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

export default Section2