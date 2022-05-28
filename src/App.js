import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Itemcard from "./components/Itemcard";

function App() {
  //Durch objects ersetzen!!
  //Dann kann ich die value einfach * den preis nehmen
  const [fruits, setFruitObject] = useState([
    {
      name: "Bananas",
      price: 0.5,
      amount: 0,
      totalValue: 0,
    },
    {
      name: "Apples",
      price: 0.6,
      amount: 0,
      totalValue: 0,
    },
    {
      name: "Avocados",
      price: 1.9,
      amount: 0,
      totalValue: 0,
    },
  ]);

  function setTotalValueFunction(index, newAmountValue) {
    const newFruitsArray = [...fruits];
    newFruitsArray[index].amount = newAmountValue;
    newFruitsArray[index].totalValue = fruits[index].price * newAmountValue;
    setFruitObject(newFruitsArray);
    console.log(newFruitsArray[index].totalValue);
  }

  return (
    <div className="App">
      <h1>
        Total Price:{" "}
        {fruits[0].totalValue + fruits[1].totalValue + fruits[2].totalValue}
      </h1>
      <Itemcard
        itemTitle={fruits[0].name}
        itemPrice={fruits[0].price}
        itemAmount={fruits[0].amount}
        setFruitObject={(newAmountValue) => {
          setTotalValueFunction(0, newAmountValue);
        }}
      />
      <Itemcard
        itemTitle={fruits[1].name}
        itemPrice={fruits[1].price}
        itemAmount={fruits[1].amount}
        setFruitObject={(newAmountValue) => {
          setTotalValueFunction(1, newAmountValue);
        }}
      />
      <Itemcard
        itemTitle={fruits[2].name}
        itemPrice={fruits[2].price}
        itemAmount={fruits[2].amount}
        setFruitObject={(newAmountValue) => {
          setTotalValueFunction(2, newAmountValue);
        }}
      />
    </div>
  );
}

export default App;
