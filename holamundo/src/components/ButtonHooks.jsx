import React, { useState } from 'react'

//*Esto es React Hooks

function ButtonHooks() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>You have $ {count} dollars</p>
      <button onClick={() => setCount(count+1)}>
        Add money
      </button>
      <button onClick={() => setCount(count-1)}>
        Delete money
      </button>

      { count === 0 ? ( <p>No money!</p> ) : count === 1 ? ( <p>One dollar</p> ) : ( <p>Many dollars</p> ) }
    </div>
  )
}

export default ButtonHooks