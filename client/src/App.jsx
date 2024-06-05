import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QuickMatch from "./pages/battlefield4";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuickMatch />} />
      </Routes>
    </Router>
  );
};

export default App;
