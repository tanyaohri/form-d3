import React from 'react';
import Chart from './pages/graph';
import Register from './pages/register';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route element={<Register />} path="/" />
          <Route element={ <Chart />} path="/d3_graph" />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
