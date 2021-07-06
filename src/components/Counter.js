import React, { useEffect, useState } from 'react'

const Counter = () => {
  const [ count, setCount ] = useState(0)

  const increaseCount = () => {
    setCount(count + 1)
  }

  const decreaseCount = () => {
    setCount(count - 1)
  }

  return(
    <>
      <h1>Counter</h1>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h3 onClick={decreaseCount} style={{marginRight: '1em', cursor: 'pointer'}}>-</h3>
        <h2 style={{marginRight: '1em'}}>{count}</h2> 
        <h3 onClick={increaseCount} style={{cursor: 'pointer'}}>+</h3>
      </div>
    </>
  )
}

export default Counter