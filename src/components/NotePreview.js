import React from 'react'
import { BsPaperclip } from 'react-icons/bs'
import '../styling/NotePreview.css'

const NotePreview = ({title, content, bgColor}) => {
  if (content.length > 97) {
    content = content.slice(0, 97) + '...'
  } 

  return (
    <div className='note-preview' style={{backgroundColor: bgColor}}>
      <BsPaperclip className='note-preview-icon'/>
      <h2 className='note-preview-title'>{title}</h2>
      <p className='note-preview-content'>{content}</p>
    </div>
  )
}

export default NotePreview