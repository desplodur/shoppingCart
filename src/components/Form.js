import { nanoid } from "nanoid";
import React from "react";
import "./form.css";

function Form({ fruitsArray, setFruitObject }) {
  const createFruit = (event) => {
    event.preventDefault();
    const newFruitObject = {
      id: nanoid(),
      name: event.target.fruitName.value,
      price: event.target.fruitPrice.value,
      amount: 0,
      totalValue: 0,
    };
    const newFruitsArray = [...fruitsArray, newFruitObject];
    setFruitObject(newFruitsArray);
  };

  return (
    <form className="form" onSubmit={createFruit}>
      <div className="form__inputFieldWrapper">
        <input
          className="form__inputField"
          type="text"
          name="fruitName"
          placeholder="Fruit name"
          required
        ></input>
        <input
          className="form__inputField"
          type="text"
          name="fruitPrice"
          placeholder="0.5"
          required
        ></input>
      </div>
      <button className="form__submitButton" type="submit">
        Create a new Item
      </button>
    </form>
  );
}

export default Form;
