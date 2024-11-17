import React, { FC } from 'react'
import styles from './AlphabetFilter.module.css'

interface AlphabetFilterProps {
  selectedLetter: string | null
  onSelectedLetter: (letter: string | null) => void
}

const AlphabetFilter: FC<AlphabetFilterProps> = ({
  selectedLetter,
  onSelectedLetter,
}) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  return (
    <div className={styles.wrapper}>
      {alphabet.map((letter) => (
        <button
          key={letter}
          onClick={() => onSelectedLetter(letter)}
          className={styles.btn}
        >
          {letter}
        </button>
      ))}
    </div>
  )
}

export default AlphabetFilter
