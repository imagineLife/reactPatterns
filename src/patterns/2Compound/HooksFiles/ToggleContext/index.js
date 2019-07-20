import React from 'react'

//1. Context Holder
const ToggleContext = React.createContext()

//2. Toggle Provider wrapper fn
function ToggleProvider(props) {
  const [on, setOn] = React.useState(false)

  //useCallback lets the setOn fn stay static, instead of re-rendering
  const toggleFn = React.useCallback(() => setOn(oldOn => !oldOn), [])
  
  /*
	stateObj returns 
	{
	  on : on,
	  toggleFn: aboveToggleFn
	}
  */ 
  const stateObj = React.useMemo(() => ({on, toggleFn}), [on])
  
  return (
    <ToggleContext.Provider value={stateObj}>
      {props.children}
    </ToggleContext.Provider>
  )
}

export { ToggleContext, ToggleProvider }