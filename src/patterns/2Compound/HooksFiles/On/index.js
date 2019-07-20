import React from "react"
import useToggleContext from '../UseTogCont'

const On = ({children}) => {
  const {on} = useToggleContext()
  return on ? children : null
}

export default On;