import React, { FC } from 'react'

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
    <div>
      {alphabet.map((letter) => (
        <button key={letter} onClick={() => onSelectedLetter(letter)}>
          {letter}
        </button>
      ))}
      <button onClick={() => onSelectedLetter(null)}>X</button>
    </div>
  )
}

export default AlphabetFilter
