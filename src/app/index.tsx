import { Pages } from "@pages/index";
import React from "react";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Pages />
      </main>
    </BrowserRouter>
  );
};