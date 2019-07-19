import React from 'react'

//The toggler HTML content is in the toggler file
import {Switch} from '../../Switch/class'

class Toggle extends React.Component {
  state = {on: false}
  toggle = () => this.setState({on: !this.state.on})
  render() {
    const {on} = this.state
    console.log('%c CUR STATE ON', 'background-color: brown; color: white;')
    console.log(on)
    
    
    return <Switch on={on} onClick={this.toggle} />
  }
}

function Usage({
  onToggle = (...args) => console.log('onToggle', ...args),
}) {
  return <Toggle onToggle={onToggle} />
}
Usage.title = 'Build Toggle'

export { Toggle, Usage }
