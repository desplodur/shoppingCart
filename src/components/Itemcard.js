import { useState } from "react";

function Itemcard({ itemTitle, itemPrice, itemAmount, setFruitObject }) {
  return (
    <div className="itemCard">
      <h2>{itemTitle}</h2>
      <p>{itemPrice} per piece</p>
      <button
        onClick={() => {
          setFruitObject(itemAmount + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setFruitObject(itemAmount - 1);
        }}
      >
        -
      </button>
      <p>amount: {itemAmount}</p>
      <p>total: {itemPrice * itemAmount}</p>
    </div>
  );
}

export default Itemcard;
