

import { useState } from 'react'
import './App.css'
import Blogs from './compunents/Blogs/Blogs'
import Bookmarks from './compunents/Bookmarks/Bookmarks'
import Header from './compunents/header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState([])

  const handleAddtoBookmark = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }


  const handleMarkAsRead = (time,id) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
    const remainingBookmarks = bookmarks.filter(bookmark=> bookmark.id !== id);
    setBookmarks(remainingBookmarks)
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddtoBookmark={handleAddtoBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>



    </>
  )
}

export default App
