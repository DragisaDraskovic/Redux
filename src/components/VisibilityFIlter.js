import { filterChange } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

import React from 'react'

const VisibilityFIlter = (props) => {
    const dispatch = useDispatch()

    // const VisibilityFIlter = (value) => {
    //     console.log(value)
    //   }
  return (
    <div>
        all  <input type='radio' name='filter' onChange={() => dispatch(filterChange('ALL'))} />
    important <input type='radio' name='filter' onChange={() => dispatch(filterChange('IMPORTANT'))} />
    nonimportant <input type='radio' name='filter' onChange={() => dispatch(filterChange('NONIMPORTANT'))} />
    </div>
  )
}

export default VisibilityFIlter