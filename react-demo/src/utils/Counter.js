import { useState } from 'react';

export default function Counter(){
    const[counter,setCounter] =useState(0)

    function handelNext(){
        setCounter(counter+1);
    }
    function handlePrevious(){
        setCounter(counter-1);
    }

    return (
        <div style={{border:'3px solid black',background:'orange'}}>
            <h2>Counter Demo</h2>
            <button onClick={handelNext}>next</button>
            <button onClick={handlePrevious}>previous</button>
            <p>Counter:{counter}</p>
        </div>
    );
}