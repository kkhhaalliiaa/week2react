import React, {useState} from "react";
import "./Counter.css"

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = ()=> {
        setCount(count + 1);
        setCounter(sum)
    }
    
    const decrement = () => {
        setCount(count - 1);
        setCounter(sum)
    }


    return (
    <div className="counter-container">
        <button onClick={increment} className="add-button">
        Addition
        </button>
        <div className="counter-display">{count}</div>
        <button onClick={decrement} className="subtract-button">
        Subtractions
        </button>
    </div>
    )
}
