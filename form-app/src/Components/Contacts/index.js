import { useState, useEffect } from 'react'
import List from "./List";
import Form from "./Form";
import "./styles.css";

function Contacts() {
    const [contacts, setContacts] = useState([
      {
        fullname: 'Hasan Baygül',
        phone: '5552223388'
      },
      {
        fullname: 'Ahmet Erdem',
        phone: '5446667788'
      },
      {
        fullname: 'Samet Gökmen',
        phone: '6554443322'
      }
    ])
    useEffect(() => {
        console.log(contacts);
    }, [contacts])

  return (
    <div id='container'>
        <List contacts={contacts} />
        <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts