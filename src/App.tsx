import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardPage from "./components/CardPage";
import TodosPage from "./components/TodosPage";
import UsersPage from "./components/UsersPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/card" element={<CardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
