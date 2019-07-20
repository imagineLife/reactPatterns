import React from "react"
import useToggleContext from '../UseTogCont'

const Off = ({children}) => {
  const {on} = useToggleContext()
  return on ? null : children
}

export default Off;