import { useState } from "react";
import "./App.css";
import FilterRedFruits from "./components";

function App() {
  const [fruits, setFruits] = useState([
    { name: "Banana", color: "yellow", price: 2 },
    { name: "Cherry", color: "red", price: 3 },
    { name: "Strawberry", color: "red", price: 4 },
  ]);

  const filterRedFruits = () => {
    return setFruits(
      fruits.filter((fruit) => {
        if (fruit.color === "red") {
          return true;
        } else {
          return false;
        }
      })
    );
  };

  const totalPrice = fruits.reduce((acc, fruit) => acc + fruit.price, 0);

  return (
    <div className="App">
      <p className="price">Valor Total : {totalPrice}</p>
      <FilterRedFruits fruits={fruits} />
      <button className="btn" onClick={filterRedFruits}>
        Mostrar frutas vermelhas
      </button>
    </div>
  );
}

export default App;
