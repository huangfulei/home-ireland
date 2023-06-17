import { create } from 'zustand'

interface ILoadingState {
  isLoading: boolean
  setIsLoading: (isLoading: boolean | undefined) => void
}

export const useLoadingStore = create<ILoadingState>(set => ({
  isLoading: false,
  setIsLoading: (isLoading: boolean | undefined) => set({ isLoading: isLoading || false })
}))
