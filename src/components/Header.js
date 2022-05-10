import React from 'react'
import { FaPlus } from 'react-icons/fa'
import '../styling/Header.css'

const Header = ({ setAddingNote }) => {
  return (
    <div id='header-container'>
      <h1>React Notes</h1>
      <button className='add-note-btn' onClick={() => setAddingNote(true)}>
        <FaPlus/> New note
      </button>
    </div>
  )
}

export default Header