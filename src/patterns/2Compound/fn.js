import React from 'react'
import {Switch} from '../../Switch/class'
import On from './HooksFiles/On'
import Off from './HooksFiles/Off'
import Button from './HooksFiles/Button'
import { ToggleProvider } from './HooksFiles/ToggleContext'
/*
  GOALS HERE 

  1.Make a single 'toggle' component
  2. Build 3 'child' components
     where all access the parent component props/methods
  3. Allow developer sensible re-orderding of component order on-screen
     utilizing the nature of the 'children' prop
     developer can move the children that are inside the toggle wrapper


  COMPOUND COMPONENTS
    implicitly access the state of the parent toggle component
    implicitly access the state-updating method as well

  PROCESS OVERVIEW
    1. Build Toggle Context state holder

   
*/

/*
  THE COMPOUNDING EFFECT
  for convenience, but totally not required
  this makes the on / off/ button components PART OF
  the ToggleProvider.

  On, Off and Button could be used as <On/>, <Off/> && <Button/>
  without these object appendages
*/
ToggleProvider.On = On
ToggleProvider.Off = Off
ToggleProvider.Button = Button

// export default ToggleProvider

const Usage = () => {
  return (
    <ToggleProvider>
      <ToggleProvider.On>The button is on</ToggleProvider.On>
      <ToggleProvider.Off>The button is off</ToggleProvider.Off>
      <ToggleProvider.Button />
    </ToggleProvider>
  )
}

export { Usage }