import React, { useEffect, useState } from "react";

function Counter({ arr, setArr, addname }) {
  // state={count:0}
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  //   increment=()=> {this.setState({count: this.state.count+1 }) }

  const add = () => {
    setArr([...arr, { name: text }]);
  };
  const increment = (x) => {
    setCount(count + x);
  };

  const decrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };
  // component did mount
  //   useEffect(() => {
  //     document.title = "hi";
  //   }, []);

  // did update

  //   useEffect(() => {
  //     document.title = text + count;
  //   }, [text, count]);
  //   useEffect(() => {
  //     document.title = text + count;
  //   });

  // will unmout

  useEffect(() => {
    return () => {
      document.title = "bye";
    };
  }, []);
  return (
    <div>
      <button onClick={() => increment(5)}>+</button>
      <span> {count} </span>
      <button onClick={decrement}>-</button>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={() => addname({ name: text })}>add</button>
      <h3> {text}</h3>
    </div>
  );
}

export default Counter;
