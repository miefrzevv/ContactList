import React, { useState, FC, ChangeEvent, FormEvent } from 'react'
import Contact from '../models/Contact'

interface AddContactFormProps {
    addContact: (newContact: Contact) => void
}

const initState = {
  name: '',
  surname: '',
  number: '',
  img: '',
}

const AddContactForm: FC<AddContactFormProps> = ({addContact}) => {
  const [newContact, setNewContact] = useState<{
    name: string
    surname: string
    number: string
    img: string
  }>(initState)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setNewContact({...newContact, [name]: value})
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const {name, surname, number, img} = newContact

    if (name && surname && number && img) {
        addContact({
            name,
            surname,
            number: Number(number),
            img,
            id: Date.now(),
        })
        setNewContact(initState)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Имя"
        onChange={handleChange}
        value={newContact.name}
      />
      <input
        type="text"
        name="surname"
        placeholder="Фамилия"
        onChange={handleChange}
        value={newContact.surname}
      />
      <input
        type="text"
        name="number"
        placeholder="Телефон"
        onChange={handleChange}
        value={newContact.number}
      />
      <input
        type="text"
        name="img"
        placeholder="Выбрать аватарку"
        onChange={handleChange}
        value={newContact.img}
      />
      <button type="submit">+ Добавить в контакты</button>
    </form>
  )
}
export default AddContactForm
