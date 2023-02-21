import React from 'react'
import ReactDOM from 'react-dom/client'

import { configureStore } from '@reduxjs/toolkit'
//import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'


import App from './App'
import noteReducer, { createNote } from './reducers/noteReducer'
import filterReducer, { filterChange } from './reducers/filterReducer'

//const store = createStore(noteReducer)

// const reducer = combineReducers({
//   notes: noteReducer,
//   filter: filterReducer
// })

const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer
  }
})
console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

store.subscribe(() => console.log(store.getState()))
store.dispatch(filterChange('NONIMPORTANT'))
store.dispatch(createNote('combineReducesrs forms one reducer from many simple reducers'))