import { useDispatch, useSystemSelector, twMerge } from '@hooks'
import { setTheme } from '@slices/System'
import { IconMoon, IconSun } from './Icon'

const ToggleTheme = (props: ToggleThemeProps) => {

  const { className } = props

  const dispatch = useDispatch()
  const { theme } = useSystemSelector()

  const isDark = theme == 'dark'

  const handleChangeTheme = () => {
    dispatch(setTheme(isDark ? 'light' : 'dark'))
  }

  return (
    <button
      className={twMerge(
        'size-10 relative rounded-full bg-transparent overflow-hidden transition-all',
        'hover:bg-rgb-215 dark:hover:bg-rgb-60',
        className
      )}
      onClick={handleChangeTheme}>
      <div className={twMerge(
        'absolute offset-0 center rounded-full text-primary transition-transform duration-300',
        isDark ? 'opacity-0 rotate-45' : 'opacity-100 rotate-0'
      )}>
        <IconSun />
      </div>
      <div className={twMerge(
        'absolute offset-0 center rounded-full text-primary transition-transform duration-300',
        isDark ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45'
      )}>
        <IconMoon />
      </div>
    </button>
  )
}

export default ToggleTheme

type ToggleThemeProps = {
  className?: string
}