import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Stars from "./components/Stars";

function App() {
  const [show, setShow] = useState(false);

  const [arr, setArr] = useState([{ name: "ali" }, { name: "salah" }]);

  const addname = (x) => {
    setArr([...arr, x]);
  };
  const toggleshow = () => {
    setShow(!show);
  };
  console.log(show);
  console.log(arr);
  return (
    <div className="App">
      <h1>ws hooks</h1>
      <Stars></Stars>
      <button onClick={toggleshow}> {show ? "hide" : "show"} </button>
      {show && <Counter arr={arr} setArr={setArr} addname={addname}></Counter>}
    </div>
  );
}

export default App;
