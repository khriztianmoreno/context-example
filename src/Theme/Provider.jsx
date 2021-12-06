import  { useContext, useState } from 'react';

import { ThemeContext  } from './Context'

export const ThemeProvider = (props) => {
  const { children } = props

  const propsToPass = {
    name: 'cristian',
    age: 32
  }

  return (
    <ThemeContext.Provider value={propsToPass}>
      {children}
    </ThemeContext.Provider>
  )
}
