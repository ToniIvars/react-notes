import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'
import {v4 as uuid} from 'uuid'
import '../styling/NewNoteForm.css'

const NewNoteForm = ({ setAddingNote, setNotes }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [color, setColor] = useState('#F2F8AD')

  const closeForm = () => {
    document.getElementById('form-container').style.animationDuration = '1s'
    document.getElementById('form-container').style.animationName = 'fadeOut'

    setTimeout(() => {
      setAddingNote(false)
    }, 750);
  }

  const formSubmit = e => {
    e.preventDefault()

    setNotes(prevNotes => {
      let newNotes = {...prevNotes}
      
      newNotes[uuid()] = {
          title: title,
          content: content,
          bgColor: color
      }

      localStorage.setItem('notes', JSON.stringify(newNotes))

      return newNotes
    })

    closeForm()
  }

  return (
    <div id='form-container'>
      <form onSubmit={formSubmit}>
        <div id='form-header'>
          <h2>Create a new note</h2>
          <CgClose onClick={closeForm}/>
        </div>
        
        <input type="text" name="title" id="title" placeholder='Note title' value={title} onChange={e => setTitle(e.target.value)} required/>
        <textarea rows='10' name="content" id="content" placeholder='Note content' value={content} onChange={e => setContent(e.target.value)} required/>

        <div id='form-last-row'>
          <div className='form-label-input'>
            <label htmlFor="color">Note color:</label>
            <input type="color" name="color" id="color" value={color} onChange={e => setColor(e.target.value)}/>
          </div>

          <button className='add-note-btn'>
            <FaPlus/> Add note
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewNoteForm