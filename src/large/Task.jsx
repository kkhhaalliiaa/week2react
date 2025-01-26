import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "./ToDo.css"

export default function Task({task}) {
    const {id} = useParams()
    const navigate = useNavigate()
    const item = task.at(id)

return (
    
    <div className="task-container">
    <h1 className="task-title">{item}</h1>
    <button onClick={() => navigate("/todo")} className="btn btn-back">Back to To-Do List</button>
    </div>
)
}
