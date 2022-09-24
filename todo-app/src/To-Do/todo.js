import { useState, useEffect } from "react";
import Input from "./Input";
import List from "./List";


function Todo() {
    const [toDoList, setToDoList] = useState([])
    const [status, setStatus] = useState("")
    const [noteList, setNoteList] = useState([])

    useEffect(() => {
        const getLocalNotes = JSON.parse(localStorage.getItem("notes"))
        setToDoList(getLocalNotes)
        
        if (getLocalNotes === null) {
            setToDoList([])
        } else {
            setToDoList(getLocalNotes)
        }
    }, [])

    useEffect(() => {
        switch (status) {
            case "All":
                setNoteList(toDoList)
                break;
            case "Active":
            let activeNote = toDoList.filter((note) => note.isChecked === false)
            setNoteList(activeNote)
                break;
            case "Completed":
                let completeNote = toDoList.filter((note) => note.isChecked === true)
                setNoteList(completeNote)
                break;
            default:
                setNoteList(toDoList)
                break;
        }
    }, [toDoList, status])

    function handleSubmit(value) {
        setToDoList(prevNote => [...prevNote, value])
        localStorage.setItem("notes", JSON.stringify([...toDoList, value]))
    }

    function deleteNote(delNoteId) {
        let newList = toDoList.filter((prevNote) => prevNote.id !== delNoteId)
        setToDoList(newList)
        localStorage.setItem("notes", JSON.stringify(newList))
    }

    function ClearCompleted() {
        let newToDoList = toDoList.filter(note => note.isChecked === false)
        setToDoList(newToDoList)
        localStorage.setItem("notes", JSON.stringify(newToDoList))
    }

    function allChecked() {
        let statusChecked = toDoList.map(prevNote => {
            let status;
            if (prevNote.isChecked === false) {
                status = true
            } return status
        })

        let newNotes = toDoList.map(prevNote => {
            if (prevNote.isChecked === false) {
                prevNote.isChecked = !prevNote.isChecked
            } return prevNote
        })
        if (statusChecked.includes(true)) {
            setToDoList(newNotes)
            localStorage.setItem("notes", JSON.stringify(newNotes))
        } else {
            let statusChange = newNotes.map(note => {
                if (note.isChecked) {
                    note.isChecked = !note.isChecked
                } return note
            }) 
            setNoteList(statusChange)
            localStorage.setItem("notes", JSON.stringify(statusChange))
        }
    }

  return (
    <div>
        <section className="todoapp">
        <Input handleSubmit={handleSubmit} />
        <section className="main">
            <input className="toggle-all" type="checkbox" checked={toDoList.find(note => note.isChecked === true) ? true : false} onChange={allChecked} />
            {
                toDoList.length <= 0 ? null : <label htmlFor="toggle-all" onClick={allChecked}>Mark all as complete</label>
            }
            <ul className="todo-list">
                {
                    noteList.map((note) => {
                        return <List
                            key={note.id}
                            note={note}
                            setToDoList={setNoteList}
                            toDoList={toDoList}
                            deleteNote={deleteNote}
                        />
                    })
                }
            </ul>
        </section>
        <footer className="footer">
        <span className="todo-count">
            <strong>{toDoList.filter((note) => note.isChecked === false).length} </strong>
            items left
        </span>
        <ul className="filters">
            <li>
            <a href="#/" id='All' onClick={() => setStatus("All")} className={status === "All" ? "selected" : ""}>All</a>
            </li>
            <li>
            <a href="#/" id='Active' onClick={() => setStatus("Active")} className={status === "Active" ? "selected" : ""}>Active</a>
            </li>
            <li>
            <a href="#/" id='Completed' onClick={() => setStatus("Completed")} className={status === "Completed" ? "selected" : ""}>Completed</a>
            </li>
        </ul>
        {
            toDoList.find(todo => todo.isChecked === true) && <button onClick={ClearCompleted} className="clear-completed">Clear Completed</button>
        }
        </footer>
    </section>
    <footer className="info">
        <p>Click to edit a todo</p>
        <p>
        Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
        Edited to React App by <a href="https://github.com/HasanRs">@HasanRs</a>
        </p>
    </footer>
    </div>
  )
}

export default Todo