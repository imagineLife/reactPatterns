import React from 'react'

//1 create context
const ToggleContext = React.createContext()
const { Provider, Consumer } = ToggleContext

class ToggleProvider extends React.Component{

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