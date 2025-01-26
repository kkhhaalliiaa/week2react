import React, {useEffect, useState, useRef} from 'react'
import {Link} from 'react-router-dom'

export default function ToDo({task, setTask}) {
    const input = useRef(null); 

    function createTask(e){
        e.preventDefault();
        const items = [...task];
        items.push(input.current.value)
        // console.log(input.current.value)
        setTask(items)
    }

    function deleteTask(i){
        const items = [ ...task];
        items.splice(i,1)
        setTask(items)
    }

    function updateTask(i,updatedTask){
        const items = [...task];
        items.splice(i,1,updatedTask)
        setTask(items)
    }



    return (
    <div className="todo-container">
        <h1>To Do List</h1>
        <form onSubmit={(e)=>createTask(e)} className="todo-form">
            <input type="text" ref={input} className="todo-input"/>
            <button type="submit" className="btn btn-create">Create</button>
        </form>

        {task.map((item,index) => (
        <div key={index} className="task-card"> 
        <Link to={`/Task/${index}`} className="task-link">
            <p className="task-text">{item} </p>
        </Link> 

        <div className="task-buttons">
            <button onClick={() => deleteTask(index)} className="btn btn-delete"> Delete</button>
            <button onClick={() => updateTask(index, prompt("Please enter a new task", item))} className="btn btn-edit"> Edit </button>
        </div>
        
        </div>
        ))}
    </div>
)
}
