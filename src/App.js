import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Itemcard from "./components/Itemcard";

function App() {
  //Durch objects ersetzen!!
  //Dann kann ich die value einfach * den preis nehmen

  const [totalValue, setTotalValue] = useState([0, 0, 0]);

  function setTotalValueFunction(index, newTotalValue) {
    const newTotalValueArray = [...totalValue];
    newTotalValueArray[index] = newTotalValue;
    setTotalValue(newTotalValueArray);
  }

  return (
    <div className="App">
      <h1>Total Price: {totalValue.reduce((a, b) => a + b)}</h1>
      <Itemcard
        itemTitle={"Bananas"}
        itemPrice={0.5}
        itemValue={totalValue[0]}
        setTotalValueProp={(newTotalValue) => {
          setTotalValueFunction(0, newTotalValue);
        }}
      />
      <Itemcard
        itemTitle={"Apples"}
        itemPrice={0.6}
        itemValue={totalValue[1]}
        setTotalValueProp={(newTotalValue) => {
          setTotalValueFunction(1, newTotalValue);
        }}
      />
      <Itemcard
        itemTitle={"Avocados"}
        itemPrice={1.9}
        itemValue={totalValue[2]}
        setTotalValueProp={(newTotalValue) => {
          setTotalValueFunction(2, newTotalValue);
        }}
      />
    </div>
  );
}

export default App;
