import { AnimatePresence } from 'framer-motion'

const AnimateWrapper = ({ children }: any) => {
  const onExitComplete = () => {
    window.scrollTo({ top: 0 })
  }

  return (
    <AnimatePresence mode='wait' initial={true} onExitComplete={onExitComplete}>
      {children}
    </AnimatePresence>
  )
}

export default AnimateWrapper
