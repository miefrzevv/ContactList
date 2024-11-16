import { useState, useEffect } from 'react'
import Contact from '../models/Contact'

const useFilteredContacts = (contacts: Contact[], searchTerm: string, selectedLetter: string | null) => {
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>(contacts)

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (!searchTerm) {
        setFilteredContacts(contacts)
      } else {
        setFilteredContacts(
          contacts.filter(({ name, surname, number }) =>
            [name, surname, number.toString()].some((field) =>
              field.toLowerCase().includes(searchTerm.toLowerCase())
            )
          )
        )
      }
    }, 300)

    return () => clearTimeout(debounce)
  }, [contacts, searchTerm])

  return filteredContacts
}

export default useFilteredContacts