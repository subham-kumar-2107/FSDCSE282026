import React, {useState} from 'react'
import cat from './images/cat.jpg'
 function StateHandling(){
    const[count,setCount]=useState(100);
     const[red,setRed]=useState(0);
     const[green,setGreen]=useState(255);
     const[blue,setBlue]=useState(0);
     const[catHeight,setcatHeight]=useState(100);
     const[catWidth,setcatWidth]=useState(100);
     const[ImageRotate,setrotate]=useState(0);

     function changeBGColor(){
      setRed(Math.random()*255);
      setGreen(Math.random()*255);
      setBlue(Math.random()*255);
     }

     function enhanceHeight(){
        setcatHeight(catHeight+10);
     }
     function enhancewidth(){
        setcatWidth(catWidth+10);
     }
     function rotate(){
        setrotate(ImageRotate+90);
     }
  {/*  const[count,setCount] =useState(100);
    function increment(){
        setCount(count+20);
    }
    function decrement(){
        setCount(count=10)
    }
    return(
  /*     <div>StateHandling
            <h2>Count{count} </h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

        </div> */ }
 return(
        <div>
            <h2>Change Background Color</h2>
            <div style={{backgroundColor:`rgb(${red},${green},${blue})`, border:'2px solid red',height:'300px',width:'200px'}} >
                <img src={cat} height={catHeight} width={catWidth} style={{transform:`rotate(${ImageRotate}deg)`}}/>
            </div>
            <button onClick={changeBGColor}>RANDOM COLOR</button>
            <button onClick={enhanceHeight}>height increase</button>
            <button onClick={enhancewidth}>width increase</button>
            <button onClick={rotate}>rotate</button>

        </div>
        )
    }
    export default StateHandling;