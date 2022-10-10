import './App.css';
import { useState, useMemo } from "react";
import Header from "./Components/Header";

function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState(0);

    const data = useMemo(() => {
        return { name: "John", age: 25 };
    }, []);

    // const object = calculateObject();
    const object = useMemo(() => calculateObject(), []);
    return (
        <div className="App">
            <Header object={object} data={data} />
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <br/>
            <input value={text} onChange={({ target }) => setText(target.value)} />
        </div>
  );
}

function calculateObject() {
    console.log("calculateObject called");
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
        sum += i;
    }
    console.log("calculateObject finished");
    return sum;
}

export default App;