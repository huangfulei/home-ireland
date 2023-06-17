import { create } from 'zustand'

interface SearchStore {
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
}

export const useSearchStore = create<SearchStore>(set => ({
  searchTerm: '',
  setSearchTerm: (searchTerm: string) => {
    set({ searchTerm })
  }
}))
