import React, { createRef, forwardRef } from 'react'
import Demo2 from './Demo2'
const D = forwardRef((props: any, ref: any) => {
  return (
    <Demo2 ref={ref} />
  )
})
const ref = createRef()
class Main extends React.Component {
  public componentDidMount () {
    console.log(ref, 'ref')
  }
  public render () {
    return (
      <div>
        <D ref={ref} />
      </div>
    )
  }
}
export default Main
