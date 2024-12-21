import apiClient from "../config/api-client";
import { Expense } from "../model/Expense";

export const getExpenses = () => {
  return apiClient.get<Expense[]>("/expenses");
};

export const getExpenseByExpenseId = (expenseId: string) => {
  return apiClient.get<Expense>(`/expenses/${expenseId}`);
};

export const deleteExpensebyExpenseId = (expenseId: string) => {
  return apiClient.delete<void>(`/expenses/${expenseId}`);
};

export const saveOrUpdateExpense = (expense: Expense) => {
  // if(expense.expenseId !== undefined || expense.expenseId !== null) {
  //   return apiClient.put<Expense>(`/expenses/${expense.expenseId}`, expense);
  // }
  if (expense.expenseId !== undefined && expense.expenseId !== null) {
    return apiClient.put<Expense>(`/expenses/${expense.expenseId}`, expense);
  }
  
  return apiClient.post<Expense>(`/expenses`, expense);
};
