import { useState, useEffect } from 'react'
import Header from './components/Header'
import NewNoteForm from './components/NewNoteForm'
import NoteContainer from './components/NoteContainer'
import Note from './components/Note'
import './App.css';

const App = () => {
  const [notes, setNotes] = useState({})
  const [addingNote, setAddingNote] = useState(false)
  const [viewingNote, setViewingNote] = useState('')

  useEffect(() => {
    let localStorageNotes = JSON.parse(localStorage.getItem('notes'))

    if (localStorageNotes) {
      setNotes(localStorageNotes)
    }
  }, [])

  return (
    <>
      {addingNote && <NewNoteForm setAddingNote={setAddingNote} setNotes={setNotes}/>}
      {viewingNote && <Note setViewingNote={setViewingNote} viewingNote={viewingNote} notes={notes} setNotes={setNotes}/>}

      <Header setAddingNote={setAddingNote}/>
      <NoteContainer notes={notes} setViewingNote={setViewingNote}/>
    </>
  );
}

export default App;
