import React from 'react';
import { ToggleContext } from '../ToggleContext'

const useToggleContext = (val) => {
  const context = React.useContext(ToggleContext)
  if (!context) {
    throw new Error(
      `Toggle compound components cannot be rendered outside the Toggle component`,
    )
  }

  console.log('useToggleContext context')
  console.log(context)
  if(val){
  	return context[val]
  }else{
  	return context
  }
}

export default useToggleContext;