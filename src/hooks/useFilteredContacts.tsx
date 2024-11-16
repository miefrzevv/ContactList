import { useMemo } from 'react'
import Contact from '../models/Contact'

const useFilteredContacts = (
  contactsList: Contact[],
  searchTerm: string,
  selectedLetter: string | null
) => {
  const filteredContacts = useMemo(() => {
    let filtered = contactsList

    if (searchTerm) {
      filtered = filtered.filter(({ name, surname, number }) =>
        [name, surname, number.toString()].some((field) =>
          field.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    }

    if (selectedLetter) {
      filtered = filtered.filter(({ name }) =>
        name.toLowerCase().startsWith(selectedLetter.toLowerCase())
      )
    }

    return filtered
  }, [contactsList, searchTerm, selectedLetter])

  return filteredContacts
}

export default useFilteredContacts
