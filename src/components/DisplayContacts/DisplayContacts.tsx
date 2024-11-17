import React, { FC, useState, useEffect } from 'react'
import Contact from '../../models/Contact'
import SingleContact from '../SingleContact'
import useFilteredContacts from '../../hooks/useFilteredContacts'
import AlphabetFilter from '../AlphabetFilter'
import styles from './DisplayContacts.module.css'

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
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null)

  const filteredContacts = useFilteredContacts(
    contactsList,
    searchTerm,
    selectedLetter
  )

  return (
    <div className={styles.wrapper}>
      {/* поле поиска */}
      <input
        className={styles.search}
        type="text"
        placeholder="Поиск по имени/фамилии/телефону"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* фильтр по буквам */}
      <AlphabetFilter
        selectedLetter={selectedLetter}
        onSelectedLetter={(letter) => setSelectedLetter(letter)}
      />
      <div className={styles.wrapper__list}>
        {/* мап контактов */}
        {filteredContacts.map((contact) => {
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
    </div>
  )
}

export default DisplayContacts
