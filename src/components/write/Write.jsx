import React from 'react'
import './write.css'

function Write() {


  function handleChange(e){

  }

  function addItem(){

  }
  return (
    <center>
        <input type={'text'} name='item' id='to' onChange={handleChange}/>
        <select id='add' name='option' onChange={handleChange}>
          <option value="">Select</option>
          <option value="section1">Do First</option>
          <option value="section2">Schedule</option>
          <option value="section3">Delegate</option>
          <option value="section4">Don’t Do</option>
        </select>
        <button type='button' id='add' onClick={addItem}>Add</button>
    </center>
  )
}

export default Write