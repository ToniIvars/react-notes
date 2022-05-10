import React from 'react'
import NotePreview from './NotePreview'
import {v4 as uuid} from 'uuid'
import '../styling/NoteContainer.css'

const NoteContainer = ({ notes, setViewingNote }) => {
  return (
    <div id='note-container'>
      {notes.map(note => <NotePreview key={uuid()} title={note.title} content={note.content} bgColor={note.bgColor} setViewingNote={setViewingNote} />)}
    </div>
  )
}

export default NoteContainer