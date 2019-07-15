import React from 'react'
interface Props {
  stage?: string
}
class Main extends React.Component<Props> {
  public state = {
    stage: 'init'
  }
  public componentWillMount () {
    console.log('will mount')
    this.setState({
      stage: 'componentWillMount'
    })
  }
  public componentDidMount () {
    console.log('componentDidMount')
    // this.setState({
    //   stage: 'componentDidMount'
    // })
  }
  public componentWillReceiveProps (props: Props) {
    console.log('componentWillReceiveProps')
    this.setState({
      stage: 'componentWillReceiveProps'
    })
  }
  // public shouldComponentUpdate () {
  //   console.log('shouldComponentUpdate')
  //   // this.setState({
  //   //   stage: 'shouldComponentUpdate'
  //   // })
  //   return true
  // }
  public componentWillUpdate () {
    console.log('componentWillUpdate')
    // this.setState({
    //   stage: 'componentWillUpdate'
    // })
  }
  public componentDidUpdate () {
    // this.setState({
    //   stage: 'componentDidUpdate'
    // })
    console.log('componentDidUpdate')
  }
  public componentWillUnmount () {
    this.setState({
      stage: 'componentWillUnmount'
    })
  }
  public render () {
    console.log('render')
    return (
      <div>{this.state.stage}</div>
    )
  }
}
export default Main
