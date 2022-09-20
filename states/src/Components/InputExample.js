import {useState} from 'react'

function InputExample() {
    const [form, setForm] = useState({name:"", surname:""})

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
  return (
    <div>
        <h1>Enter Name</h1>
        <input name='name' value={form.name} onChange={onChangeInput} />
        <br />
        <h1>Enter Surname</h1>
        <input name='surname' value={form.surname} onChange={onChangeInput} />

        <h3>Merhaba {form.name} {form.surname}</h3>
    </div>
  )
}

export default InputExample