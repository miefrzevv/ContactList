import React, { FC, useState } from 'react'
import Contact from '../../models/Contact'
import EditContactForm from '../EditContactForm'
import styles from './SingleContact.module.css'

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
    <div className={styles.wrapper}>
      <img
        src={`/images/${contact.img}`}
        alt={contact.name}
        className={styles.wrapper__img}
      />
      <div className={styles.wrapper__text}>
        <h2 className={styles.wrapper__name}>{contact.name}</h2>
        <h2 className={styles.wrapper__surname}>{contact.surname}</h2>
        <h3 className={styles.wrapper__number}>{contact.number}</h3>
      </div>

      <div className={styles.wrapper__controls}>
        <AiFillEdit onClick={() => handleToggleEdit()} className={styles.wrapper__btn}/>
        <AiFillDelete onClick={() => handleDelete()} className={styles.wrapper__btn}/>
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
