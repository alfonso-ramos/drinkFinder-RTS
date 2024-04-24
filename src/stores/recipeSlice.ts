import { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeService"
import type { Categories, Drinks } from '../types';
import { SearchFilter } from '../types/index';


export type RecipesSliceType = {
    categories: Categories,
    drinks: Drinks
    fetchCategories: () => Promise<void>
    searchRecipes: (SearchFilter: SearchFilter  ) => Promise<void>
}

export const createRecipesSlice : StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },
    searchRecipes: async (filters) => {
        const drinks = await getRecipes(filters)
        set({
            drinks
        })
    },

})