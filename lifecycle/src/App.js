import { useState } from "react";
import Counter from './Components/Counter'

function App() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div>
      {isVisible && <Counter />}
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
    </div>
  )
}

export default App