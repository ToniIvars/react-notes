import { useState } from 'react'
import Header from './components/Header'
import NewNoteForm from './components/NewNoteForm'
import NoteContainer from './components/NoteContainer'
import './App.css';

function App() {
  const [addingNote, setAddingNote] = useState(false)

  return (
    <>
      {addingNote && <NewNoteForm setAddingNote={setAddingNote}/>}
      <Header setAddingNote={setAddingNote}/>
      <NoteContainer/>
    </>
  );
}

export default App;
