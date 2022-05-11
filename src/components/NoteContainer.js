import React from 'react'
import NotePreview from './NotePreview'
import '../styling/NoteContainer.css'

const NoteContainer = ({ notes, setViewingNote }) => {
  return (
    <div id='note-container'>
      {Object.keys(notes).map(noteUUID => <NotePreview key={noteUUID} uuid={noteUUID} title={notes[noteUUID].title} content={notes[noteUUID].content} bgColor={notes[noteUUID].bgColor} setViewingNote={setViewingNote} />)}
    </div>
  )
}

export default NoteContainer