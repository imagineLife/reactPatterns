import React from 'react';
import { ToggleContext } from '../ToggleContext'

const useToggleContext = () => {
  const context = React.useContext(ToggleContext)
  if (!context) {
    throw new Error(
      `Toggle compound components cannot be rendered outside the Toggle component`,
    )
  }
  return context
}

export default useToggleContext;