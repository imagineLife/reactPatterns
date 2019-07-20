import React from 'react'
import { ToggleContext } from '../ToggleContext'
import { Switch } from '../../../../Switch/class'

const Button = (props) => {
  const {on, toggleFn} = React.useContext(ToggleContext)//useToggleContext()
  return <Switch on={on} onClick={toggleFn} {...props} />
}

export default Button;