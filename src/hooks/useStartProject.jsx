import { createContext, useContext, useMemo, useState } from 'react'
import StartProjectModal from '../components/StartProjectModal'

const StartProjectContext = createContext(() => {})

export function StartProjectProvider({ children }) {
  const [open, setOpen] = useState(false)
  const value = useMemo(() => () => setOpen(true), [])

  return (
    <StartProjectContext.Provider value={value}>
      {children}
      <StartProjectModal open={open} onClose={() => setOpen(false)} />
    </StartProjectContext.Provider>
  )
}

export function useStartProject() {
  return useContext(StartProjectContext)
}
