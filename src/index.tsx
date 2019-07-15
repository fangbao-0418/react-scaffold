import React from 'react'
import ReactDom from 'react-dom'
import Dome from './Demo1'
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
      <Dome
        stage={this.state.stage}
      />
    )
  }
}
ReactDom.render(
  <Main />,
  document.getElementById('app')
)