import { classNames } from 'shared/lib/classNames/classNames'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import React, { memo } from 'react'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'


interface ThemeSwitcherProps {
    className?: string
}
export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {

  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant={ButtonVariant.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
    </Button>
  )
})
