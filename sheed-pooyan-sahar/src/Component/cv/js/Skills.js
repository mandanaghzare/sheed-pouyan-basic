import React, { useId, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Skills() {
    const dispatch = useDispatch()
    const value = useSelector((state) => state.value.value)
    const [val, setVal] = useState();
    const id = useId();
  return (
    <li onClick={(e) => setVal(value)} id={id} className="col-xl-2 col-lg-3 col-md-4">React native
    </li>
  )
}

export default Skills