import React from 'react'
interface Props {
  stage?: string
}
interface State {
  stage: string
}
class Main extends React.Component<Props, State, State> {
  public state = {
    stage: 'init'
  }
  public static getDerivedStateFromProps (props: Props) {
    console.log('getDerivedStateFromProps')
    return props
  }
  public componentDidMount () {
    const p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('success')
      }, 1000)
    })
    p.then((res) => {
      console.log(res)
      // return Promise.reject('failed')
      throw Error('failed')
    }).then((res) => {
      console.log(res, 'resolve')
    }, (err) => {
      console.log(err.message, 'reject')
    })
    console.log('componentDidMount')
  }
  public getSnapshotBeforeUpdate (): any {
    console.log('getSnapshotBeforeUpdate')
    return null
  }
  public componentDidUpdate () {
    console.log('componentDidUpdate')
  }
  public render () {
    console.log('render')
    return (
      <div
        id='stage'
        className='stage'
        // style={{color: 'brown'}}
      >{this.state.stage}</div>
    )
  }
}
export default Main
