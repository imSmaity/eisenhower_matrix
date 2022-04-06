import React from 'react'


function Li({ref, item}) {
  return <li ref={ref} >{item}</li>;
}

export default Li