import React from 'react'
import  './Tag.css'

function Tag(props) {
  const {tegName}  = props
  return (
    
    <>
          <button className='tag'>{tegName}</button>
    </>
  )
}

export default Tag