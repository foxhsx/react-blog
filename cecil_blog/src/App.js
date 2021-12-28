import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import DashBoard from "./views/Dashboard";

function App() {
  return (
    <div>
      111
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
