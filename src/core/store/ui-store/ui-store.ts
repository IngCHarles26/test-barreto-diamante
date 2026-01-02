import {create} from 'zustand'

import {persist} from 'zustand/middleware'

interface State {
  actualOption:string
  setActualOption: (option:string) => void
}

export const useUiStore = create<State>()(
  persist(
    (set) => ({
      actualOption: 'dashboard',
      setActualOption: (option:string) => set({actualOption: option}),
    }),
    {
      name: 'ui-storage',
    }
  )
)