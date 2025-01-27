import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import './styles.css'

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [newData, setNewData] = useState({ amount: "", category: "", date: "" });
  const [filters, setFilters] = useState({ category: "", startDate: "", endDate: "" });
  const [showChart, setShowChart] = useState(false);

  const handleNewExpense = () => {
    if (newData.amount && newData.category && newData.date && parseFloat(newData.amount)>0) {
      setExpenses([...expenses, { ...newData, amount: parseFloat(newData.amount) }]);
      setNewData({ amount: "", category: "", date: "" });
    }
    else{
        alert("Please enter a valid details")
    }
  };

  const handleClearSearch = () =>{
    setFilters({category : "", startDate :"", endDate :""})
  }

  const searchExpenses = expenses.filter((expense) => {
    const withinCategory =
      !filters.category || expense.category.toLowerCase() === filters.category.toLowerCase();
    const withinDateRange =
      (!filters.startDate || new Date(expense.date) >= new Date(filters.startDate)) &&
      (!filters.endDate || new Date(expense.date) <= new Date(filters.endDate));
    return withinCategory && withinDateRange;
  });

  const spendingByCategory = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  const chartData = Object.entries(spendingByCategory).map(([category, total]) => ({
    category,
    total,
  }));

  return (
    <div className="container">
      <div className="card">
        <h2 className="card-title">Add Expense</h2>
        <div className="form-group">
          <input
            type="number"
            placeholder="Amount"
            value={newData.amount}
            onChange={(e) => setNewData({ ...newData, amount: e.target.value })}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Category"
            value={newData.category}
            onChange={(e) => setNewData({ ...newData, category: e.target.value })}
            className="input-field"
          />
          <input
            type="date"
            value={newData.date}
            onChange={(e) => setNewData({ ...newData, date: e.target.value })}
            className="input-field"
          />
          <button
            onClick={handleNewExpense}
            className="btn-primary"
          >
            Add Expense
          </button>
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">View Expenses</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="Filter by category"
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            className="input-field"
          />
          <input
            type="date"
            placeholder="Start Date"
            value={filters.startDate}
            onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
            className="input-field"
          />
          <input
            type="date"
            placeholder="End Date"
            value={filters.endDate}
            onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
            className="input-field"
          />
          <button onClick={handleClearSearch} className="btn-secondary">Clear Search</button>
          <h2 className="card-title">Expenses</h2>
        </div>
        <ul className="expense-list">
          {searchExpenses.map((expense, index) => (
            <li key={index} className="expense-item">
              {expense.date} - {expense.category} - ${expense.amount.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h2 className="card-title">Spending by Category</h2>
        <button onClick={() => setShowChart(!showChart)}className="btn-primary toggle-btn"
        >{showChart ? "Hide Results" : "Show Results"}</button>
        {showChart && (<ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>)}
      </div>
    </div>
  );
};

export default ExpenseTracker;
