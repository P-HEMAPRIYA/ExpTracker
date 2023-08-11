import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css"; // Import your CSS styles here
import IncomeForm from "./components/IncomeForm";
import ExpenseForm from "./components/ExpenseForm";
import { Dashboard } from "./Dashboard";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="nav-links">
          <Link className="headd" to="/">
            Home
          </Link>
          <Link className="headd" to="/dashboard">
            Dashboard
          </Link>
          {/* <Link className='headd'to="/income">Income</Link>
                           <Link className='headd'to="/expense">Expense</Link> */}
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/income" element={<IncomeForm />} />
                    <Route path="/expense" element={<ExpenseForm />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="exp">
      <h2>Welcome to the Expense Tracker!</h2>
    </div>
  );
}

export default App;
