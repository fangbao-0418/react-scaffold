import React from 'react'
import { connect } from 'dva';
export default connect((state: any) => {
  console.log(state, 'state')
  return {
    count: state.count,
    b: {
      count: state.b
    }
  }
})((props: any) => {
  console.log(props, 'props')
  const { dispatch } = props
  return (
    <div>
      <div>PAGE b</div>
      <div>
        <button onClick={() => dispatch({type: 'count/add'})}>global +1</button> &nbsp;&nbsp;
        <button onClick={() => dispatch({type: 'count/minus'})}>global -1</button>  &nbsp;&nbsp;
        <button onClick={() => dispatch({type: 'b/add'})}>b +1</button> &nbsp;&nbsp;
        <button onClick={() => dispatch({type: 'b/minus'})}>b -1</button>
      </div>
      <div>global count: {props.count}</div>
      <div>page b count: {props.b.count}</div>
    </div>
  )
})