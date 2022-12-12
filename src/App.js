import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
      <Watchlist />
      

        <Routes>
          <Route path="/" element={<Add />}/>
        </Routes>

      <Watched />  
        
      </Router>
    </GlobalProvider>
  );
}

export default App;
