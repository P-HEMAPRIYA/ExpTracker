import React, { useState } from "react";
import IncomeForm from "./IncomeForm";
import ExpenseForm from "./ExpenseForm";
import "./App.css";

export function Dashboard() {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  // Add income to the incomes array
  const addIncome = (income) => {
    setIncomes([...incomes, income]);
  };

  // Add expense to the expenses array
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  // Calculate total income
  const totalIncome = incomes.reduce(
    (total, income) => total + income.amount,
    0
  );

  // Calculate total expense
  const totalExpense = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  // Calculate balance
  const balance = totalIncome - totalExpense;

  return (
    <div className="dashboard-container">
      <div className="summary">
        <div className="summary-item">
          <h3>Balance</h3>
          <p>${balance.toFixed(2)}</p>
        </div>
        <div className="summary-item">
          <h3>Total Income</h3>
          <p>${totalIncome.toFixed(2)}</p>
        </div>
        <div className="summary-item">
          <h3>Total Expense</h3>
          <p>${totalExpense.toFixed(2)}</p>
        </div>
      </div>

      <div className="forms-container">
        <div className="form">
          <h3>Add Income</h3>
          <IncomeForm onAddIncome={addIncome} />
        </div>
        <div className="form">
          <h3>Add Expense</h3>
          <ExpenseForm onAddExpense={addExpense} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
