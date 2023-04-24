import { createContext } from 'react'

interface IOrganizationProviderProps {
  children: React.ReactNode
}

export const OrganizationContext = createContext({})
export const OrganizationProvider = ({
  children,
}: IOrganizationProviderProps) => {
  return (
    <OrganizationContext.Provider value={{}}>
      {children}
    </OrganizationContext.Provider>
  )
}
