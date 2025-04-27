import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Expense {
  id: number;
  description: string;
  amount: number;
}

interface ExpenseStore {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  removeExpense: (id: number) => void;
}

export const useStore = create<ExpenseStore>()(
  persist(
    (set) => ({
      expenses: [],
      addExpense: (expense) =>
        set((state) => ({
          expenses: [...state.expenses, expense],
        })),
      removeExpense: (id) =>
        set((state) => ({
          expenses: state.expenses.filter((expense) => expense.id !== id),
        })),
    }),
    { name: "expense-storage" }
  )
);
