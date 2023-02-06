import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Notes from "./Notes/Notes";
import AddNote from "./Notes/AddNote";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Notes />} />
          <Route path="/add" element={<AddNote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
