import { CgClose } from 'react-icons/cg'
import { BsEraserFill } from 'react-icons/bs'
import '../styling/Note.css'

const Note = ({ setViewingNote, viewingNote, notes, setNotes }) => {
  const {title, content, bgColor} = notes[viewingNote]

  const darkBgColor = color => {
    color = color.slice(1)

    const red = parseInt(color.slice(0, 2), 16)
    const green = parseInt(color.slice(2, 4), 16)
    const blue = parseInt(color.slice(4), 16)

    const hsp = Math.sqrt(
      0.299 * (red * red) +
      0.587 * (green * green) +
      0.114 * (blue * blue)
    );
  
    // Using the HSP value, determine whether the color is light or dark
    return hsp <= 127.5
  }

  const removeNote = () => {
    closeNote()

    setTimeout(() => {
      setViewingNote('')

      setNotes(prevNotes => {
        let newNotes = {...prevNotes}
        
        delete newNotes[viewingNote]

        localStorage.setItem('notes', JSON.stringify(newNotes))

        return newNotes
      })
    }, 750);
  }

  const closeNote = () => {
    document.getElementById('viewing-note-container').style.animationDuration = '1s'
    document.getElementById('viewing-note-container').style.animationName = 'fadeOut'

    setTimeout(() => {
      setViewingNote('')
    }, 750);
  }

  return (
    <div id='viewing-note-container'>
      <div className={darkBgColor(bgColor) && 'note-dark-bg'} style={{backgroundColor: bgColor}}>
        <div id='viewing-note-header'>
          <h2>{title}</h2>
          <CgClose onClick={closeNote}/>
        </div>
        
        <p>{content}</p>

        <button id='remove-note-btn' onClick={removeNote}>
          <BsEraserFill/> Remove note
        </button>
      </div>
    </div>
  )
}

export default Note