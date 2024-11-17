import React, { FC, useState, ChangeEvent, useEffect } from 'react'
import AddContactForm from '../components/AddContactForm'
import styles from './App.module.css'

import { useLocalStorage } from 'usehooks-ts'

import Contact from '../models/Contact'
import DisplayContacts from '../components/DisplayContacts'

const App: FC = () => {
  const [contactList, setContactList] = useLocalStorage<Contact[]>(
    'contacts',
    []
  )
  const [searchTerm, setSearchTerm] = useState('')

  const addContact = (newContact: Contact) => {
    setContactList([...contactList, newContact])
  }

  const updateContact = (newContact: Contact) => {
    setContactList(
      contactList.map((contact) =>
        contact.id === newContact.id ? newContact : contact
      )
    )
  }

  const deleteContact = (id: number) => {
    const newContactsList = contactList.filter((contact) => contact.id !== id)
    setContactList(newContactsList)
  }

  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Contact List</h1>
        
        <AddContactForm addContact={addContact} />
        <DisplayContacts
          contactsList={contactList}
          updateContact={updateContact}
          deleteContact={deleteContact}
        />
      </div>
    </div>
  )
}

export default App
