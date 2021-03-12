import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(()=> 0)
  const [color, setColor] = useState(()=> "green")


  function decreament(){
    setCount(preCount => preCount -1 )
  }
  function increament(){
    setCount(preCount => preCount +1 )

  }

  useEffect(() => {
    changeColor (count);

    return () => {
      changeColor (count);

    }
    
  }, [count])

function changeColor (count) {
  if (count < 0) {
    setColor(() => "red" )
    
  }  else if (count > 0) {
    setColor(() => "blue" )
  }
  else if (count === 0) {
    setColor(() => "green" )
  }

}

console.log(count + " -" + color)

  return (
   <>
    <button onClick = {decreament}> - </button>
    <span className = {color}>  {count} </span>
    <button onClick = {increament}> + </button>
   </>
  );
}

export default App;
