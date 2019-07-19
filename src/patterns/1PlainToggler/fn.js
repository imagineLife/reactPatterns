import React from 'react'

//The toggler HTML content is in the toggler file
import {Switch} from '../../Switch/class'

const Toggle = () => {
  let [ on, setOn ] = React.useState(false)

  const toggle = () => setOn(!on)
    
  return <Switch on={on} onClick={toggle} />
}

function Usage() {
  return <Toggle />
}
Usage.title = 'Build Toggle'

export { Toggle, Usage }
