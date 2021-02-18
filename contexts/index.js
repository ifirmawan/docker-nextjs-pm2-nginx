import { useReducer, useContext, createContext } from 'react'
import defaultStates from './actions'
import reducers from './reducers'

const StateContext = createContext()
const DispatchContext = createContext()

export const ActionProvider = ({ children, ...props }) => {
    const [state, dispatch] = useReducer(reducers, {...defaultStates, ...props })
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export const dataProviders = {
  values: () => useContext(StateContext),
  actions: () => useContext(DispatchContext)
}
