import React, { FC, useState } from 'react'
import Contact from '../models/Contact'
import EditContactForm from './EditContactForm'

import { AiFillEdit, AiFillDelete } from 'react-icons/ai'

interface SingleContactProps {
  contact: Contact
  updateContact: (newContact: Contact) => void
  deleteContact: (id: number) => void
}

const SingleContact: FC<SingleContactProps> = ({
  contact,
  updateContact,
  deleteContact,
}) => {
  const [edit, setEdit] = useState<boolean>(false)

  const handleToggleEdit = () => {
    setEdit(!edit)
  }

  const handleDelete = () => {
    deleteContact(contact.id)
  }

  return (
    <div>
      <img src={`/images/${contact.img}`} alt={contact.name} />
      <h2>{contact.name}</h2>
      <h2>{contact.surname}</h2>
      <h3>{contact.number}</h3>

      <div className="pizza-controls">
        <AiFillEdit onClick={() => handleToggleEdit()} />
        <AiFillDelete onClick={() => handleDelete()} />
      </div>

      {edit ? (
        <EditContactForm
          data={contact}
          updateContact={updateContact}
          handleToggleEdit={handleToggleEdit}
        />
      ) : null}
    </div>
  )
}

export default SingleContact
