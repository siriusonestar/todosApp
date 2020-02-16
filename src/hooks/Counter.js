import React, {Component, useEffect, useState} from "react";
import randomColor from "randomcolor"
function Counter() {
    const [count, setCount] = useState(1);
    const [color, setColor] = useState("");

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prev => prev - 1)
    }

    useEffect(() => {
            setColor(randomColor())
        }, [count]
    )

    return (
        <div>
            <h1 style={{color: color}}>{count}</h1>
            <button onClick={increment}>Increment!</button>
            <button onClick={decrement}>Decrement!</button>
        </div>
    )
}

export default Counter;