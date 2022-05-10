import { CgClose } from 'react-icons/cg'
import '../styling/Note.css'

const Note = ({ setViewingNote, viewingNote }) => {
  const {title, content, bgColor, isBgdark} = viewingNote

  const closeNote = () => {
    document.getElementById('viewing-note-container').style.animationDuration = '1s'
    document.getElementById('viewing-note-container').style.animationName = 'fadeOut'

    setTimeout(() => {
      setViewingNote({})
    }, 750);
  }

  return (
    <div id='viewing-note-container'>
      <div className={isBgdark && 'note-dark-bg'} style={{backgroundColor: bgColor}}>
        <div id='viewing-note-header'>
          <h2>{title}</h2>
          <CgClose onClick={closeNote}/>
        </div>
        
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Note