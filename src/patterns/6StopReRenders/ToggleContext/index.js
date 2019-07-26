import React from 'react'

/*
  CURRENTLY:
  Any time the VALUE prop content changes in the Provider,
  the consumers re-render.
  
  PROBLEM: This causes re-renders where components don't need
    to re-render.

  FIX:
  put the toggle fn in the state.
    USUALLY this is odd.
    but for a provider value, this works well to avoid un-necessary
      re-rendering 
*/

const ToggleContext = React.createContext()
const { Provider, Consumer } = ToggleContext

class ToggleProvider extends React.Component{
  constructor(props){
    super(props)
    this.toggleFn = this.toggleFn.bind(this)
  }

  toggleFn(){
    this.setState({on: !this.state.on})
  }

  state = {
    on: false,
    toggleFn: this.toggleFn
  }

  render(){
    return(<Provider value={{
      on: this.state.on, 
      toggleFn: this.toggleFn
    }}>
      {this.props.children}
    </Provider>)
  }
  
}

export { ToggleContext, ToggleProvider, Consumer as ToggleConsumer }