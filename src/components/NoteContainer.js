import React from 'react'
import NotePreview from './NotePreview'
import {v4 as uuid} from 'uuid'
import '../styling/NoteContainer.css'

function NoteContainer() {
  const notes = [
    {title: 'Hello', content: 'First note', bgColor: '#f2f8ad'},
    {title: 'Hello', content: 'Second note', bgColor: '#f00'},
    {title: 'Hello', content: 'Third note', bgColor: '#f0f'},
    {title: 'Hello', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam voluptatem doloribus aperiam nisi error aliquam ducimus, cum suscipit dolorem consequatur mollitia laborum! Quia quasi, accusamus recusandae impedit molestias consequatur error?', bgColor: '#aaa'},
  ]
  
  return (
    <div id='note-container'>
      {notes.map(note => <NotePreview key={uuid()} title={note.title} content={note.content} bgColor={note.bgColor} />)}
    </div>
  )
}

export default NoteContainer