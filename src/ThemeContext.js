import React, { useContext, useState } from 'react';

// 1. Crear Contexto
const ThemeContext = React.createContext()

// 2. Crear un componente que tenga el Provider del contexto y envuelva a sus hijos
export const ThemeProvider = (props) => {
  const [isDark, setTheme] = useState(false)
  const { children } = props

  const propsToPass = {
    isDark,
    setTheme,
    name: 'ThemeProvider'
  }

  return (
    <ThemeContext.Provider value={propsToPass}>
      {children}
    </ThemeContext.Provider>
  )
}

// 3. Consumir el contexto, ayudemonos de un custom Hook
export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useContext debe estar dentro de un ThemeContext')
  }

  return context
}
