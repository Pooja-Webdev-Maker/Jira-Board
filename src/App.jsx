import React from 'react'
import './app.css'
import TaskForm from './components/TaskForm/task-form'

function App() {
  return (
    <div className='app'>
    <h1 style={{textAlign :'center', margin:'50px'}}>Jira Board</h1>
       <TaskForm />
        <main className="app_main">
          <section className="task_coloumn">Section1</section>
            <section className="task_coloumn">Section2</section>
              <section className="task_coloumn">Section3</section>
                <section className="task_coloumn">Section4</section>
        </main>
    </div>
  )
}

export default App