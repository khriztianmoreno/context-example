import { Bisnieto } from './Bisnieto'

import { useTheme } from './ThemeContext'

export const Nieto = () => {
  const { name } = useTheme()
  return (
    <div>
      Este es el componente Nieto - {name}

      <Bisnieto />
    </div>
  )
}
