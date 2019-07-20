import React from 'react'

//1 create context
const ToggleContext = React.createContext()
const { Provider, Consumer } = ToggleContext

class ToggleProvider extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      on: false
    }

    this.toggleFn = this.toggleFn.bind(this)
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