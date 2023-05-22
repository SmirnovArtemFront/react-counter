import React from "react";
import { Block } from "./Block";
import "./index.scss";
import { json } from "body-parser";

function App() {
  const [rates, setRates] = React.useState({});

  React.useEffect(() => {
    fetch("https://cdn.cur.su/api/latest.json")
      .then((res) => res.json())
      .then((json) => {
        setRates(json.retes);
        console.log(json.rates);
      })
      .catch((err) => {
        console.warn(err);
        alert("Не удалось получить информацию");
      });
  }, []);
  return (
    <div className="App">
      <Block
        value={0}
        currency="RUB"
        onChangeCurrency={(cur) => console.log(cur)}
      />
      <Block value={0} currency="USD" />
    </div>
  );
}

export default App;
