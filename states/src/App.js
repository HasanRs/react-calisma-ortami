import { useState } from 'react'

function App() {
  const [name, setName] = useState("Hasan")
  const [age, setAge] = useState(19)
  const [friends, setFriends] = useState(["Ahmet","Samet"])
  const [address, setAddress] = useState({title:"Tekirdag", zip:"59850"})

  return (
    <div className="App">
      <h1>Merhaba {name} {age}</h1>
      <button onClick={() => setName("Can")}>Change Name</button>
      <button onClick={() => setAge(20)}>Change age</button>

      <hr />
      <h2>Friends</h2>
      {
        friends.map((friend, i) => 
        <div key={i}>
          {friend}
        </div>
        )
      }
      <button onClick={() => setFriends([...friends, "Kava"])}>Add New Friend</button>

      <hr />
      <h2>Address</h2>
      <div>{address.title} {address.zip}</div>
      <button onClick={() => setAddress({...address, title:"Istanbul", zip: 34000})}>Set Address</button>
    </div>
  );
}

export default App;
