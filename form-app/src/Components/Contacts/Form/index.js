import { useEffect, useState} from 'react'

const initialFormValues = ({ fullname: "", phone: "" })

function Form({ addContact, contacts }) {
    const [form, setForm] = useState(initialFormValues)

    useEffect (() => {
        setForm (initialFormValues)
    }, [contacts])

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (form.fullname === "" || form.phone === "") {
            return false;
        }

        addContact([...contacts, form])
        
    }

  return (
    <form onSubmit={onSubmit}>
        <h2>Contacts Form</h2>
        <div>
            <input 
                name='fullname' 
                placeholder='Name Surname' 
                onChange={onChangeInput} 
                value={form.fullname} 
            />
        </div>
        <div>
            <input 
                name='phone' 
                placeholder='Phone' 
                onChange={onChangeInput} 
                value={form.phone} />
        </div>
        <div>
            <button>Add</button>
        </div>
    </form>
  )
}

export default Form