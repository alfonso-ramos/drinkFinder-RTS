import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import { RecipesSliceType, createRecipesSlice } from "./recipeSlice";

// ...a is a copy of all arguments of create function
export const useAppStore = create<RecipesSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a)
})))