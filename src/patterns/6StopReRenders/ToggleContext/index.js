import React from 'react'

/*
  CURRENTLY:
  Any time the VALUE prop content changes in the Provider,
  the consumers re-render.
  
  PROBLEM: This causes re-renders where components don't need
    to re-render.

  
*/
const ToggleContext = React.createContext()
const { Provider, Consumer } = ToggleContext

class ToggleProvider extends React.Component{
  constructor(props){
    super(props)
    this.toggleFn = this.toggleFn.bind(this)
  }
  
  state = {
    on: false,
    toggleFn: this.toggleFn
  }

  toggleFn(){
    this.setState({on: !this.state.on})
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