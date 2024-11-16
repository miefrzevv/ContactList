import React, { FC, useState, useEffect } from 'react'
import Contact from '../models/Contact'
import SingleContact from './SingleContact'
import useFilteredContacts from '../hooks/useFilteredContacts'
import AlphabetFilter from './AlphabetFilter'

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
    <div>
      {/* поле поиска */}
      <input
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
  )
}

export default DisplayContacts
