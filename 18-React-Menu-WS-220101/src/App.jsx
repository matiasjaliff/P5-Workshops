import React from "react";

import Header from "./components/Header";
import List from "./components/List";

import menu from "./menu.json";

const { drinks, food } = menu;

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <h3>Drinks</h3>
        <List items={drinks} />
        <h3>Food</h3>
        <List items={food} />
      </main>
    </div>
  );
};

export default App;
