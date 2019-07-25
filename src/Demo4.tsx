/**
 * 测试state同步现象
 */
import React, { useState } from 'react'
export default function () {
  const [count, setCount] = useState(0)
  return (
    <div>
      count: <span>{count}</span>
      <br />
      <button
        onClick={() => {
          // setCount(count + 3)
          setCount((prevState: number) => {
            console.log(prevState, 'prevState')
            return prevState + 1
          })
          setCount((prevState: number) => {
            console.log(prevState, 'prevState')
            return prevState + 1
          })
          // setCount(count + 2)
          // setCount(count + 1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setCount(count - 1)
        }}
      >
        -1
      </button>
    </div>
  )
}
