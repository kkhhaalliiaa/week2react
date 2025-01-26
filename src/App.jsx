import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Counter from './easy/Counter'
import Movie from './med/Movie'
import ToDo from './large/ToDo'
import Task from './large/Task'
import Navbar from "./navbar/Navbar";


function App() {
  const [task , setTask] = useState([]);

  return (
    <>
    <Router>
    <Navbar/> 
      <Routes>
        <Route path="/" element={<Counter/>} />
        <Route path="movie" element={<Movie />} />
        <Route path="ToDo" element={<ToDo task={task} setTask={setTask} />} /> 
        <Route path="Task/:id" element={<Task task={task}/>}/>
      </Routes>
    </Router>

    </>
  )
}

export default App
