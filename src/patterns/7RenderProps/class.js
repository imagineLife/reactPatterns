import React from 'react'
import {Switch} from '../../Switch/class'

//1. Import Context
import { ToggleProvider, ToggleConsumer  } from './ToggleContext'

/*
  GOALS HERE 

*/

// Flexible Compound Components with context
class Toggle extends React.Component {
  static On = ({children}) => (
    <ToggleConsumer>
      {({on}) => (on ? children : null)}
    </ToggleConsumer>
  )
  static Off = ({children}) => (
    <ToggleConsumer>
      {({on}) => (on ? null : children)}
    </ToggleConsumer>
  )
  static Button = props => (
    <ToggleConsumer>
      {({on, toggleFn}) => (
        <Switch on={on} onClick={toggleFn} {...props} />
      )}
    </ToggleConsumer>
  )

  static oddBall = props => {
    console.log('Rendering oddball');
    return (
      <ToggleConsumer>
      { (val) => (
        <p>OddBal consumer Component</p>)
      }
      </ToggleConsumer>
    )
  }
  
  renderUI(Provider, kids){
    return(
      <Provider>
        {kids}
      </Provider>
    )
  }

  render() {
    return this.renderUI(ToggleProvider, this.props.children)
  }
}

function Usage({
  onToggle = (...args) => console.log('onToggle', ...args),
}) {
  return (
    <Toggle onToggle={onToggle}>
      <Toggle.On>The button is on</Toggle.On>
      <Toggle.Off>The button is off</Toggle.Off>
      <div style={{
        backgroundColor: 'orange', 
        width: '100%', 
        padding: '20px 0'
      }}>
        <Toggle.Button />
        <Toggle.oddBall />
      </div>
    </Toggle>
  )
}
Usage.title = 'Flexible Compound Components'

export {Toggle, Usage}