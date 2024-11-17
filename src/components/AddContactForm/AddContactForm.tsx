import React, { useState, FC, ChangeEvent, FormEvent } from 'react'
import Contact from '../../models/Contact'
import Select from 'react-dropdown-select'
import styles from './AddContactForm.module.css'

interface AddContactFormProps {
  addContact: (newContact: Contact) => void
}

const initState = {
  name: '',
  surname: '',
  number: '',
  img: '',
}

const options = [
  {
    value: '../images/pudge.png',
    label: 'pudge',
  },
  {
    value: '../images/am.png',
    label: 'am',
  },
]

const AddContactForm: FC<AddContactFormProps> = ({ addContact }) => {
  const [newContact, setNewContact] = useState<{
    name: string
    surname: string
    number: string
    img: string
  }>(initState)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewContact({ ...newContact, [name]: value })
  }

  const handleImageChange = (selected: any) => {
    const { value } = selected[0]
    setNewContact({ ...newContact, img: value })
  }

  const validateForm = (): boolean => {
    const { name, surname, number, img } = newContact

    const nameRegex = /^[A-Za-zА]+$/
    const numberRegex = /^\d+$/

    if (!name || !surname || !number || !img) {
      alert('заполните все поля!')
      return false
    }

    if (!nameRegex.test(name)) {
      alert('Имя может содержать только английские буквы!')
      return false
    }

    if (!nameRegex.test(surname)) {
      alert('Фамилия может содержать только английские буквы!')
      return false
    }

    if (!numberRegex.test(number)) {
      alert('Номер может содерждать только цифры')
      return false
    }

    return true
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (validateForm()) {
      const { name, surname, number, img } = newContact
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
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <input className={styles.wrapper__name}
        type="text"
        name="name"
        placeholder="Имя"
        onChange={handleChange}
        value={newContact.name}
      />
      <input className={styles.wrapper__surname}
        type="text"
        name="surname"
        placeholder="Фамилия"
        onChange={handleChange}
        value={newContact.surname}
      />
      <input className={styles.wrapper__number}
        type="text"
        name="number"
        placeholder="Телефон"
        onChange={handleChange}
        value={newContact.number}
      />
      <Select className={styles.wrapper__select}
        values={[]}
        options={options}
        onChange={handleImageChange}
        placeholder="Pick a hero"
      />
      <button type="submit" className={styles.wrapper__btn}>+ Добавить в контакты</button>
    </form>
  )
}
export default AddContactForm
