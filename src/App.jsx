

import './App.css'
import Blogs from './compunents/Blogs/Blogs'
import Bookmarks from './compunents/Bookmarks/Bookmarks'
import Header from './compunents/header'

function App() {
 

  return (
    <>
    <Header></Header>
    <div className='md:flex'>
    <Blogs></Blogs>
    <Bookmarks></Bookmarks>
    </div>
     
      
      
    </>
  )
}

export default App
