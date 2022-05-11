import React from 'react'
import { BsPaperclip } from 'react-icons/bs'
import '../styling/NotePreview.css'

const NotePreview = ({uuid, title, content, bgColor, setViewingNote}) => {
  let previewContent = content.length <= 97 ? content : content.slice(0, 97) + '...'

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

  const isBgdark = darkBgColor(bgColor)

  return (
    <div className='note-preview' style={{backgroundColor: bgColor}} onClick={() => setViewingNote(uuid)}>
      <BsPaperclip className='note-preview-icon'/>
      <h2 className={`note-preview-title ${isBgdark && 'dark-bg'}`}>{title}</h2>
      <p className={`note-preview-content ${isBgdark && 'dark-bg'}`}>{previewContent}</p>
    </div>
  )
}

export default NotePreview