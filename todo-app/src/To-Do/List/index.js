import React from 'react'

function List({ note, setToDoList, toDoList, deleteNote }) {
    function deleteBtn() {
        deleteNote(note.id)
    }

    function handleChecked() {
        let checkedNote = toDoList.map((prevNote) => {
            if (prevNote.id === note.id) {
                prevNote.isChecked = !prevNote.isChecked
            }
            return prevNote
        })

        setToDoList(checkedNote)
        localStorage.setItem("notes", JSON.stringify(checkedNote))
    }

    const handleUpdateNote = (e) => {
        let updateNotes = toDoList.map((prevNote) => {
            if (prevNote.id === note.id) {
                prevNote.note = e.target.value
            } 
            return prevNote
        })
        localStorage.setItem("notes", JSON.stringify(updateNotes))
        setToDoList(updateNotes)
    }

    let isTextCompleted = note.isChecked ? "completed" : ""

    return (
            <li className={isTextCompleted}>
                <div className='view'>
                    <input 
                        className='toggle'
                        type="checkbox"
                        checked={note.isChecked}
                        onChange={handleChecked}
                    />
                    <label onChange={handleUpdateNote}>
                        <input 
                            className='input-label'
                            defaultValue={note.note}
                        />
                    </label>
                    <button className='destroy' onClick={deleteBtn}></button>
                </div>
            </li>
    )
}

export default List