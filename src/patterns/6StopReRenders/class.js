import React from 'react'
import {Switch} from '../../Switch/class'

//1. Import Context
import { ToggleProvider, ToggleConsumer  } from './ToggleContext'

/*
  GOALS HERE 
  Allow toggle children (On, Off && Button) to be
  rendered not explicitly as children

  Instead of 
  <Toggle>
    <Toggle.Button />
    <Toggle.On>The button is on</Toggle.On>
    <Toggle.Off>The button is off</Toggle.Off>
  </Toggle>


  PROCESS
  1. Introduce a context to hold the state && pass 
  stateful vals to children as needed

  2. Import Context Provider && Consumer

  3. Wrap the etnire return statement content in the Provider 
    typical context

  4. assign the compound Components as fns

  5. Wrap the compound components returned content 
    in Context Consumers 

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
    
  render() {
    return (
      <ToggleProvider>
        {this.props.children}
      </ToggleProvider>
    )
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