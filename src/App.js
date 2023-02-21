import React from 'react'
import Notes from './components/Notes'
import NewNote from './components/NewNote'
import VisibilityFIlter from './components/VisibilityFIlter'

const App = () => {
  return(
    <>
  <div>
  <NewNote />
  <VisibilityFIlter />
  <Notes />
  </div>
  </>
  )
}

export default App