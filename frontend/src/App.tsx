import React from 'react';
import './App.css';
import TopNavBar from "./components/TopNavBar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";

export default function App() {
  return (
    <>
      <Router>
          <ToastContainer />

          <TopNavBar />

      </Router>

    </>
  );
}

