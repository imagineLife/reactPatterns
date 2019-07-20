import React from 'react'
import {Switch} from '../../Switch/class'

//1. Import Context
import { ToggleContext } from './ToggleContext'

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



class Toggle extends React.Component {
  
  static On = ({on, children}) => (on ? children : null)
  static Off = ({on, children}) => (on ? null : children)
  static Button = ({on, toggle, ...props}) => (
    <Switch on={on} onClick={toggle} {...props} />
  )
  
  state = {on: false}
  
  toggle = () =>
    this.setState({on: !this.state.on})
  
  render() {
    return React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        on: this.state.on,
        toggle: this.toggle,
      }),
    )
  }
}

function Usage() {
  return (
    <Toggle>
      <Toggle.Button />
      <Toggle.On>The button is on</Toggle.On>
      <Toggle.Off>The button is off</Toggle.Off>
    </Toggle>
  )
}
Usage.title = 'Compound Components'

export {Toggle, Usage}