import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToList } from '../../redux/actions'
import './write.css'

function Write() {
  const [data,setData]=useState({item:'',option:''})
  const dispatch=useDispatch()

  function handleChange(e){
    setData({...data,[e.target.name]:e.target.value})
  }

  function addItem(){
    if(data.option!==''&&data.item!==''){
      const storageData=JSON.parse(sessionStorage.getItem('todo_2DO2'))
      dispatch(addToList({...data,id:`${data.option}I000${storageData.section1.length+2}`}))
    }
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