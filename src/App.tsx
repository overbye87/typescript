import React from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardPage from "./components/CardPage";
import TodoItemPage from "./components/TodoItemPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import UsersPage from "./components/UsersPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavLink style={{ margin: 15 }} to="/users">
          User list page
        </NavLink>
        <NavLink style={{ margin: 15 }} to="/todos">
          Todo list page
        </NavLink>
        <NavLink style={{ margin: 15 }} to="/card">
          Card page
        </NavLink>
      </div>
      <Routes>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserItemPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/todos/:id" element={<TodoItemPage />} />
        <Route path="/card" element={<CardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
