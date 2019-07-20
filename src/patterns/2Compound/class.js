import React from 'react'
import {Switch} from '../../Switch/class'

/*
  GOALS HERE 

  1.Make a single 'toggle' component
  2. Build 3 'child' components
     where all access the parent component props/methods
  3. Allow developer sensible re-orderding of component order on-screen
     utilizing the nature of the 'children' prop
     developer can move the children that are inside the toggle wrapper


  COMPOUND COMPONENTS
    implicitly access the state of the parent toggle compoent
    implicitly access the state-updating method as well

  PROCESS OVERVIEW
    1. Create Child 'compound' components using the static reserved key in the class.
    These render children or null, depending on the 'on' state.
    The BUTTON renders a switch.
    The BUTTON is a wrapper around the Switch, another way of using the switch
      different from #1.

      ON
      OFF
      BUTTON
    
    2. Use these compound componenets in the render method
      - return React.Children.map, passing (this.props.children, childElement)
        React.Children.map: https://reactjs.org/docs/react-api.html#reactchildrenmap

      - React.cloneElement
        React.cloneElement: https://reactjs.org/docs/react-api.html#cloneelement
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