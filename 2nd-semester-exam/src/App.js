import { useReducer } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

const instialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error();
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, instialState);

  const Increment = () => {
    dispatch({ type: "increment" });
  };
  console.log(Increment);
  const Decrement = () => {
    dispatch({ type: "decrement" });
  };
  const Reset = () => {
    dispatch({ type: "reset" });
  };
  return (
    <div className="App">
      <div className="App-header">
        <h1>Count:{state.count}</h1>
        <div>
          <Button handleChange={Decrement} text="Decrement" color="red" />
          <Button handleChange={Reset} text="Reset" color="black" />
          <Button handleChange={Increment} text="increment" color="green" />
        </div>

        <Counter />
      </div>
    </div>
  );
}

export default App;
