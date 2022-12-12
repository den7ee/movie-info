import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Watched } from "./components/Watched";
import { Header } from "./components/Header"
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";
import Home from "./components/Home";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/watched" element={<Watched />}/>
        </Routes>

      </Router>
    </GlobalProvider>
  );
}

export default App;
