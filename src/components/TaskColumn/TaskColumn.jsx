import React from 'react'
import './TaskColumn.css'
function TaskColumn(props) {
  return (
  <section className="task_coloumn">
   <h2 className='task_coloumn_heading'>
    <img src={props.icon} alt="" className='task_coloumn_icon' />
   {props.title}
  
   </h2>
  </section>
  )
}

export default TaskColumn