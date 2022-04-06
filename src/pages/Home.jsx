import React from 'react'
import './home.css'
import {
  Section1,
  Section2,
  Section3,
  Section4,
  Write
} from '../components/index'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { useDispatch, useSelector } from 'react-redux'
import { editTheList } from '../redux/actions'


function Home() {
  const state=useSelector(state=>state.updateToDo)
  const dispatch=useDispatch()

  const handleOnDragEnd =(result)=>{
    const {source,destination}=result
    console.log(source,destination)
    if (!result.destination || source.droppableId===destination.droppableId) return;

    const items=state
    items[source.droppableId].splice(source.index,1)
    items[destination.droppableId].splice(destination.index,0,items[source.droppableId][source.index])
    console.log(items)
    
    dispatch(editTheList(items));
  }

  return (
    <>
      <h1>Eisenhower matrix</h1>
      <Write/>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className='section-container'>
          <Droppable droppableId="section1">
            {(provided) => (
              <div className='section1' {...provided.droppableProps} ref={provided.innerRef}>
                <Section1/>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="section2">
            {(provided) => (
              <div className='section2' {...provided.droppableProps} ref={provided.innerRef}>
                <Section2/>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="section3">
            {(provided) => (
              <div className='section3' {...provided.droppableProps} ref={provided.innerRef}>
                <Section3/>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="section4">
            {(provided) => (
              <div className='section4' {...provided.droppableProps} ref={provided.innerRef}>
                <Section4/>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </>
  )
}

export default Home