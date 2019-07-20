import React from 'react'

//1 create context
const ToggleContext = React.createContext()

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
    return(<ToggleContext.Provider value={{
      on: this.state.on, 
      toggleFn: this.toggleFn
    }}>
      {this.props.children}
    </ToggleContext.Provider>)
  }
  
}

export { ToggleContext, ToggleProvider }