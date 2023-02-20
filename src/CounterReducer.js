// import React from 'react'
// import { ReactDOM } from 'react'
// import { createStore } from 'redux'

// // const counterReducer = (state, action) => {
// //     if(action.type === 'INCREMENT') {
// //         return state + 1
// //     } else if (action.type === 'DECREMENT') {
// //         return state - 1
// //     } else if (action.type === 'ZERO') {
// //         return 0
// //     }

// //     return state
// // }

// //switch statement

// const CounterReducer = (state = 0, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             console.log('plus 1')
//             return state + 1
//         case 'DECREMENT':
//             console.log('minus 1')
//             return state - 1
//         case 'ZERO':
//             console.log(`nula`)
//             return 0
//         default: // ako nije nista od gore izvrseno
//         return state
//     }
// }

// const store = createStore(CounterReducer)

// // store.subscribe(() => {
// //     const storeNow = store.getState()
// //     console.log(storeNow)
// // })
// // store.dispatch( { type: 'INCREMENT'})
// // store.dispatch( { type: 'INCREMENT'})
// // store.dispatch( { type: 'INCREMENT'})
// // store.dispatch( { type: 'ZERO'})
// // store.dispatch( { type: 'DECREMENT'})

// const App = () => {
//     return(
//         <div>
//             <div>
//                 {store.getState()}
//             </div>
//             <button onClick={e => store.dispatch({ type: 'INCREMENT'})}>
//                 plus
//             </button>
//             <button onClick={e => store.dispatch({ type: 'DECREMENT'})}>
//                 minus
//             </button>
//             <button onClick={e => store.dispatch({ type: 'ZERO'})}>
//                 ZERO
//             </button>
//         </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'))

// const renderApp = () => {
//     root.render(<App />)
// }

// renderApp()
// store.subscribe(renderApp)
// export default CounterReducer