import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Itemcard from "./components/Itemcard";

function App() {
  //Durch objects ersetzen!!
  //Dann kann ich die value einfach * den preis nehmen
  let [fruits, setFruitObject] = useState([
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
  }

  function deleteFruit(index) {
    const newFruitsArray = [...fruits];
    newFruitsArray.splice(index, 1);
    setFruitObject(newFruitsArray);
  }

  const createFruit = (event) => {
    event.preventDefault();
    const newFruitObject = {
      name: event.target.fruitName.value,
      price: event.target.fruitPrice.value,
      amount: 0,
      totalValue: 0,
    };
    const newFruitsArray = [...fruits, newFruitObject];
    setFruitObject(newFruitsArray);
  };

  const sumAll = fruits
    .map((item) => item.totalValue)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <>
      <div className="head">
        <h1>Total Price: {sumAll} €</h1>
        <p> Money left to spend: {30 - sumAll} €</p>
        <form onSubmit={createFruit}>
          <input
            type="text"
            name="fruitName"
            placeholder="Fruit name"
            required
          ></input>
          <input
            type="text"
            name="fruitPrice"
            placeholder="0.5"
            required
          ></input>
          <button type="submit">Create a new Item</button>
        </form>
      </div>
      <div className="body">
        {fruits.map((fruit, index) => {
          return (
            <Itemcard
              key={index}
              sum={sumAll}
              itemTitle={fruit.name}
              itemPrice={fruit.price}
              itemAmount={fruit.amount}
              setFruitObject={(newAmountValue) => {
                setTotalValueFunction(index, newAmountValue);
              }}
              deleteFruit={() => {
                deleteFruit(index);
              }}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
