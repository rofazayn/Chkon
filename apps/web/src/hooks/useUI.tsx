import { useContext } from 'react'
import { UIContext } from '../contexts/ui-context'

const useUI = () => useContext(UIContext)

export default useUI
