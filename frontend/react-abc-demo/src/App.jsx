import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css"; // Import your CSS styles here
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
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
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
