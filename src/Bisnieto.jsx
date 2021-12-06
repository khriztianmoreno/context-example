import { useTheme } from './ThemeContext'

export const Bisnieto = () => {
  const { setTheme, isDark } = useTheme()

  return (
    <div>
      Este es el componente Bisnieto
      <button onClick={() => {setTheme(!isDark) }}>
        Cambiar tema
      </button>
    </div>
  )
}
