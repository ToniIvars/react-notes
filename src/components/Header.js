import React from 'react'
import { FaPlus } from 'react-icons/fa'
import '../styling/Header.css'

function Header() {
  return (
    <div id='header-container'>
      <h1>React Notes</h1>
      <button id='add-note-btn'>
        <FaPlus/> New note
      </button>
    </div>
  )
}

export default Header