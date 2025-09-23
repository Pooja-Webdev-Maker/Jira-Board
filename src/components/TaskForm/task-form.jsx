import React from 'react'
import './task-form.css'
import Tag from '../Tag/Tag'

function TaskForm() {
  return (
   <header className='app_header'>
    <form>
        <input type="text" className='task-input' placeholder='Enter task details' />
        <div className='task_form_bottom'>
        <div>
           <Tag  tegName = 'Dev'/>
            <Tag tegName = 'QA'/>
             <Tag tegName = 'Product Owner'/>
            {/* <button className='tag'>QA</button>
            <button className='tag'>Product Owner</button> */}
   </div>
   <div>
        <select className='task-status'>
            <option value="Ready For Development">Ready For Development</option>
             <option value="In Progress">In Progress</option>
              <option value="Ready for test">Ready for test</option>
               <option value="Closed">Closed</option>
        </select>
        <button  type = 'submit' className='task-submit'>+ Add</button>
           </div>
             </div>
    </form>
   </header>
  )
}

export default TaskForm