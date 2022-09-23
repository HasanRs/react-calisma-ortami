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

  return (
    <div>
        <section className="todoapp">
        <Input />
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
            <strong>2</strong>
            items left
        </span>
        <ul className="filters">
            <li>
            <a href="#/" className="selected">
                All
            </a>
            </li>
            <li>
            <a href="#/">Active</a>
            </li>
            <li>
            <a href="#/">Completed</a>
            </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
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