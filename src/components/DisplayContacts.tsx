import React, { FC } from 'react'
import Contact from '../models/Contact'
import SingleContact from './SingleContact'

interface DisplayContactsProps {
  contactsList: Contact[]
  updateContact: (newContact: Contact) => void
  deleteContact: (id: number) => void
}

const DisplayContacts: FC<DisplayContactsProps> = ({
  contactsList,
  updateContact,
  deleteContact,
}) => {
  return (
    <div>
      {contactsList.map((contact) => {
        return (
          <SingleContact
            contact={contact}
            key={contact.id}
            updateContact={updateContact}
            deleteContact={deleteContact}
          />
        )
      })}
    </div>
  )
}

export default DisplayContacts
