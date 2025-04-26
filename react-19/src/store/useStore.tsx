import { create } from "zustand";

export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
}

interface RecipeStore {
  recipies: Recipe[];
  addRecipe: (recipe: Recipe) => void;
  removeRecipe: (id: number) => void;
}

export const useStore = create<RecipeStore>((set) => ({
  recipies: [],

  addRecipe: (recipe) =>
    set((state) => ({ recipies: [...state.recipies, recipe] })),

  removeRecipe: (id) =>
    set((state) => ({
      recipies: state.recipies.filter((recipe) => recipe.id !== id),
    })),
}));
