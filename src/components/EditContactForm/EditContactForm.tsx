import React, { useState, FC, ChangeEvent, FormEvent, useEffect } from 'react'
import Contact from '../../models/Contact'

interface EditContactFormProps {
  data: Contact
  updateContact: (newContact: Contact) => void
  handleToggleEdit: () => void
}

const EditContactForm: FC<EditContactFormProps> = ({
  data,
  updateContact,
  handleToggleEdit,
}) => {
  const [editContact, setEditContact] = useState<Contact>(data)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEditContact({ ...editContact, [name]: value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { name, surname, number, img } = editContact

    if (name && surname && number && img) {
      updateContact(editContact)
      handleToggleEdit()
    }
  }

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Имя"
        onChange={handleChange}
        value={editContact.name}
      />
      <input
        type="text"
        name="surname"
        placeholder="Фамилия"
        onChange={handleChange}
        value={editContact.surname}
      />
      <input
        type="text"
        name="number"
        placeholder="Телефон"
        onChange={handleChange}
        value={editContact.number}
      />
      <input
        type="text"
        name="img"
        placeholder="Выбрать аватарку"
        onChange={handleChange}
        value={editContact.img}
      />
      <button type="submit">Подтвердить</button>
    </form>
  )
}
export default EditContactForm
