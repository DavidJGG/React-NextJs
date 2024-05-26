import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from './App';
import CategoryComponent from './categoryfield/CategoryComponent'

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode> 
    <CategoryComponent message={"Hola a todos"} cls={"category"} />
    <CategoryComponent message={"Hola a todos 2"} cls={"category2"} />
    <CategoryComponent />
    <App />
  </StrictMode>
);