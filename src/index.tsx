import React from 'react'
import ReactDom from 'react-dom'
import Dome from './Demo5'
// import './styles/app'
// import './test1'
import './test1/demo1'
// import './test2'
// import './api-test'
import './dva/app'
class Main extends React.Component {
  public state = {
    stage: 'stage'
  }
  public componentDidMount () {
    // setTimeout(() => {
    //   this.setState({
    //     stage: 'stage change'
    //   })
    // }, 1000)
  }
  render () {
    return (
      <Dome />
    )
  }
}
// ReactDom.render(
//   <Main />,
//   document.getElementById('app')
// )
