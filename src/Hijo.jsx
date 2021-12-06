import { Nieto } from './Nieto'

import { useTheme } from './ThemeContext'

export const Hijo = () => {
  const { isDark } = useTheme()
  return (
    <div>
      Este es el componente Hijo

      <p>
        El tema actual es {isDark ? 'oscuro' : 'claro'}
      </p>

      <Nieto />
    </div>
  )
}
