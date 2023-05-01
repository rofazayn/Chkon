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
      ? theme.fn.darken(theme.colors.dark[8], 0.3)
      : theme.fn.lighten(theme.colors.gray[1], 0.4)

  return <UIContext.Provider value={{ bgColor }}>{children}</UIContext.Provider>
}
