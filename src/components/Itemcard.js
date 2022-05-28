import { useState } from "react";

function Itemcard({ itemTitle, itemPrice, setTotalValueProp }) {
  const [totalAmount, setTotalAmount] = useState(0);

  return (
    <div className="itemCard">
      <h2>{itemTitle}</h2>
      <p>{itemPrice} per piece</p>
      <button
        onClick={() => {
          setTotalAmount(totalAmount + 1);
          setTotalValueProp(totalAmount * itemPrice);

          console.log(totalAmount);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setTotalAmount(totalAmount - 1);
          setTotalValueProp(totalAmount * itemPrice);
        }}
      >
        -
      </button>
      <p>amount: {totalAmount}</p>
      <p>total: {itemPrice * totalAmount}</p>
    </div>
  );
}

export default Itemcard;
