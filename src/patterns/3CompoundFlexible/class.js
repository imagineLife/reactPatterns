import React from 'react'
import {Switch} from '../../Switch/class'

//1. Import Context
import { ToggleContext, ToggleProvider } from './ToggleContext'

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
  Introduce a context to hold the state && pass 
  stateful vals to children as needed

*/



// Flexible Compound Components with context

class Toggle extends React.Component {
  static On = ({children}) => (
    <ToggleContext.Consumer>
      {({on}) => (on ? children : null)}
    </ToggleContext.Consumer>
  )
  static Off = ({children}) => (
    <ToggleContext.Consumer>
      {({on}) => (on ? null : children)}
    </ToggleContext.Consumer>
  )
  static Button = props => (
    <ToggleContext.Consumer>
      {({on, toggleFn}) => (
        <Switch on={on} onClick={toggleFn} {...props} />
      )}
    </ToggleContext.Consumer>
  )
    
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
      <div>
        <Toggle.Button />
      </div>
    </Toggle>
  )
}
Usage.title = 'Flexible Compound Components'

export {Toggle, Usage}