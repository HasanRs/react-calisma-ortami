import { useState } from 'react'

function List({ contacts }) {
  const [filterText, setFilterText] = useState("")

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => 
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    )
  })

  console.log("filtered", filtered);
  return (
    <div className='form'>
      <h2>Contact List</h2>
      <input 
        placeholder='Filter Contact'
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
       />
      <ul className='list'>
        {
          filtered.map((contact, i) => (
            <li key={i}> 
              <span>{contact.fullname}</span>
              <span>{contact.phone}</span> 
            </li>
          ))
        }
      </ul>
      <p>({filtered.length}) Person Saved</p>
    </div>
  )
}

export default List