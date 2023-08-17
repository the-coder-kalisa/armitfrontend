import { createContext, useCallback, useContext, useState } from "react"

const initialValue = {
  updateSSEData: ({}) => {},
  sseData: {},
  isBuilding: false,
  setIsBuilding: isBuilding => {}
}

const SSEContext = createContext(initialValue)

export function useSSE() {
  return useContext(SSEContext)
}

export function SSEProvider({ children }) {
  const [sseData, setSSEData] = useState({})
  const [isBuilding, setIsBuilding] = useState(false)

  const updateSSEData = useCallback(newData => {
    setSSEData(prevData => ({
      ...prevData,
      ...newData
    }))
  }, [])

  return (
    <SSEContext.Provider
      value={{ sseData, updateSSEData, isBuilding, setIsBuilding }}
    >
      {children}
    </SSEContext.Provider>
  )
}
