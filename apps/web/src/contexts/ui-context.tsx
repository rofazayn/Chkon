import { useMantineTheme } from '@mantine/core'
import { createContext } from 'react'

interface IUIProps {
  children: React.ReactNode
}

export const UIContext = createContext({} as any)
export const UiProvider = ({ children }: IUIProps) => {
  const theme = useMantineTheme()
  const bgColor =
    theme.colorScheme === 'dark'
      ? theme.fn.darken(theme.colors.dark[8], 0.35)
      : theme.fn.lighten(theme.colors.violet[0], 0.5)

  return <UIContext.Provider value={{ bgColor }}>{children}</UIContext.Provider>
}
