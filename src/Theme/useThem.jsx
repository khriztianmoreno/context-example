import  { useContext } from 'react';

import { ThemeContext  } from './Context'

export const useTheme = () => {
  const contexto = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useContext debe estar dentro de un ThemeContext')
  }

  return contexto
}
