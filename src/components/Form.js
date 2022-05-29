import React from "react";

function Form({ fruitsArray, setFruitObject }) {
  const createFruit = (event) => {
    console.log("works");
    event.preventDefault();
    const newFruitObject = {
      name: event.target.fruitName.value,
      price: event.target.fruitPrice.value,
      amount: 0,
      totalValue: 0,
    };
    const newFruitsArray = [...fruitsArray, newFruitObject];
    setFruitObject(newFruitsArray);
  };

  return (
    <form onSubmit={createFruit}>
      <input
        type="text"
        name="fruitName"
        placeholder="Fruit name"
        required
      ></input>
      <input type="text" name="fruitPrice" placeholder="0.5" required></input>
      <button type="submit">Create a new Item</button>
    </form>
  );
}

export default Form;
