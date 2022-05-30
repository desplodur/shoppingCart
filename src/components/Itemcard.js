import "./itemCard.css";

function Itemcard({
  sum,
  itemTitle,
  itemPrice,
  itemAmount,
  setFruitObject,
  deleteFruit,
}) {
  return (
    <div className="itemCard">
      <button
        onClick={() => {
          deleteFruit();
        }}
        className="deleteFruitButton"
      >
        X
      </button>
      <h2>{itemTitle}</h2>
      <p>{itemPrice} € per piece</p>
      <button
        className="itemCard__amountButton"
        onClick={() => {
          sum <= 30 - itemPrice
            ? setFruitObject(itemAmount + 1)
            : alert("Not enough money!");
        }}
      >
        +
      </button>
      <button
        className="itemCard__amountButton"
        onClick={() => {
          sum >= 0 + itemPrice
            ? setFruitObject(itemAmount - 1)
            : alert("You can´t sell anything here!");
        }}
      >
        -
      </button>
      <p>amount: {itemAmount}</p>
      <p>total: {itemPrice * itemAmount} €</p>
    </div>
  );
}

export default Itemcard;
