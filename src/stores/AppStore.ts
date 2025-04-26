
import { appStoreTypes } from '@Types/AppStore.types';
import { create } from 'zustand'
export const useAppStore = create<appStoreTypes>((set) => ({
    searchBoxValue: '',
    setSearchBoxValue: (value) => set({ searchBoxValue: value }),
    selectedImage: null,
    setSelectedImage: (value) => set({ selectedImage: value }),


}));