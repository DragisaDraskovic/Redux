import React from 'react'
import ReactDOM from 'react-dom/client'

//import { configureStore } from '@reduxjs/toolkit'
//import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import store from './store'


import App from './App'
// import noteReducer, { setNotes } from './reducers/noteReducer'
// import filterReducer, { filterChange } from './reducers/filterReducer'
// import noteService from './services/notes'


//const store = createStore(noteReducer)

// const reducer = combineReducers({
//   notes: noteReducer,
//   filter: filterReducer
// })

// const store = configureStore({
//   reducer: {
//     notes: noteReducer,
//     filter: filterReducer
//   }
// })

// noteService.getAll().then(notes => notes.forEach(note => {
//   store.dispatch(setNotes(notes))
// }))
// console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
