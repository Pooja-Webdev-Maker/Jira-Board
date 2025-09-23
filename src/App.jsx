import React from "react";
import "./app.css";
import TaskForm from "./components/TaskForm/task-form";
import TaskColumn from "./components/TaskColumn/TaskColumn";
import removeIcon from './assets/closed-icon.jpg';
function App() {
  return (
    <div className="app">
      <h1 style={{ textAlign: "center", margin: "50px" }}>Jira Board</h1>
      <TaskForm />
      <main className="app_main">
        <TaskColumn title = 'Ready For Development'/>
        <TaskColumn title = 'In progress'/>
        <TaskColumn title = 'Ready for task'/>
        <TaskColumn title = 'Closed'  icon={removeIcon}/>
      </main>
    </div>
  );
}

export default App;
