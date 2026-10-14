import React,{useEffect} from 'react'
import {useState} from 'react'
function ReactuseEffect(){

    const[counter,setCounter]=useState(0);
    const[pointer,setPointer]=useState(100);
    useEffect(()=>{
        // console.log("hey...using useEffect Hook");
        console.log("Counter"+counter)
        console.log("Pointer"+pointer)
    },[counter,pointer])
    function increaseCounter(){
        setCounter(counter+5);
    }
    function decreasePointer(){
        setPointer(pointer-5);
    }
    return(
        <div>
            <h2 style={{color:'red'}}>ReactuseEffect</h2>
            <h2 style={{color:'red'}}>Counter value={counter}</h2>
            <h2 style={{color:'green'}}>Pointer value={pointer}</h2>
            <button onClick={increaseCounter}>increaseCounter</button>
            <button onClick={decreasePointer}>decreasePointer</button>
        </div>
    )
}

export default ReactuseEffect
