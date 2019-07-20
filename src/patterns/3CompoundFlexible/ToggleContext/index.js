import React from 'react'

//1 create context
const ToggleContext = React.createContext()

const ToggleProvider = (props) => {
  return(<ToggleContext.Provider>
    {props.children}
  </ToggleContext.Provider>)
}

export { ToggleContext, ToggleProvider }