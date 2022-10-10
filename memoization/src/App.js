import './App.css';
import { useState } from "react";
import Header from "./Components/Header";

function App() {
    const [count, setCount] = useState(0);
    return (
        <div className="App">
            <Header />
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
  );
}

export default App;
