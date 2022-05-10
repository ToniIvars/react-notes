import { useState, useEffect } from 'react'
import Header from './components/Header'
import NewNoteForm from './components/NewNoteForm'
import NoteContainer from './components/NoteContainer'
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([])
  const [addingNote, setAddingNote] = useState(false)

  useEffect(() => {
    let localStorageNotes = JSON.parse(localStorage.getItem('notes'))

    if (localStorageNotes) {
      setNotes(localStorageNotes)
    }
  }, [])

  return (
    <>
      {addingNote && <NewNoteForm setAddingNote={setAddingNote} setNotes={setNotes}/>}
      <Header setAddingNote={setAddingNote}/>
      <NoteContainer notes={notes}/>
    </>
  );
}

export default App;
