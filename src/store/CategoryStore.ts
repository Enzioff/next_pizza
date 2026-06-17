import {create} from "zustand/react";

interface CategoryStoreProps {
    activeCategoryId: number;
    setActiveCategory: (activeCategoryId: number) => void;
    
}

export const useCategoryStore = create<CategoryStoreProps>((set) => ({
    activeCategoryId: 0,
    setActiveCategory: (activeCategoryId: number) => {
        set({activeCategoryId})
    }
}))
