import { useState } from "react"
import { v4 as uuidv4 } from "uuid";;

function Input({ handleSubmit }) {
    const [note, setNote] = useState({ note: "" })
    
    function onSubmit(e) {
        e.preventDefault()
        if (note.note === "") {
            alert("Lütfen notunuzu giriniz.")
            return
        }
        handleSubmit(note)
        setNote({ note: "", isChecked: false })
    }

    function handleChange(e) {
        setNote({ note: e.target.value, isChecked: false, id: uuidv4() })
    }
    

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus=""
          onChange={handleChange}
          value={note.note}
        />
      </form>
    </header>
    )
}
export default Input