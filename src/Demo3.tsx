import React, { useState, useEffect, useLayoutEffect, useMemo, useCallback } from 'react'
interface Props {
  stage?: string
}
let a = 0
function Main (props: Props) {
  const [stage, setState] = useState(null)
  const memoizedCallback = useMemo(
    () => {
      // doSomething(a, b);
      console.log('useCallback')
    },
    [a],
  )
  console.log(memoizedCallback, 'a')
  // console.log(stage, 'stage')
  // useMemo(() => {
  //   console.log(stage, 'useMemo stage')
  // }, [stage])
  // useEffect(() => {
  //   console.log('useEffect 1')
  // })
  // useEffect(() => {
  //   const t = setTimeout(() => {
  //     console.log('useEffect 2')
  //   }, 1000)
  //   return () => {
  //     console.log('useEffect 2 clear')
  //     // clearTimeout(t)
  //   }
  // })
  // useEffect(() => {
  //   console.log('useEffect 3')
  // })
  // useLayoutEffect(() => {
  //   console.log('useLayoutEffect')
  // })
  // useEffect(function () {
  //   console.log(stage, 'upadte')
  //   return function () {
  //     console.log(arguments, 'updated')
  //   }
  // })
  const time = new Date().toUTCString()
  console.log(stage, 'render')
  return (
    <div>
      <h3>函数组件 Hook 测试</h3>
      <button
        onClick={() => {
          a = Math.random()
          setState(Math.random())
        }}
      >
        change
      </button>
      <div>{stage}</div>
      <div>{time}</div>
    </div>
  )
}
export default Main
