import { useState, useEffect } from "react";

function Counter() {
    const [number, setNumber] = useState(0);
  
    useEffect(() => {
      console.log("Number state güncellendi.");
    }, [number])
  
    useEffect(() => {
      console.log("Component mount edildi.");

      setInterval(() => {
        setNumber((n) => n + 1)
      }, 1000);
    }, [])
    
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
    </div>
  )
}

export default Counter