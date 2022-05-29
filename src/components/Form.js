import { useState } from "react";

function Form(createFruit) {
  return (
    <form>
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
