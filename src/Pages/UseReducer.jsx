import React, { useReducer } from 'react'
import Button from '../components/Button';



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

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, instialState);

    const Increment = () => {
      dispatch({ type: "increment" });
    };
    
    const Decrement = () => {
      dispatch({ type: "decrement" });
    };
    const Reset = () => {
      dispatch({ type: "reset" });
    };
  return (
    <div>
      <div style={{color:"darkorange",fontFamily:"fantasy", fontSize:"45px" ,marginTop:"-10rem", marginBottom:"5rem"}}>
            Counter App with UseReducer
        </div>
        <h1>Count:{state.count}</h1>
        <div>
          <Button handleChange={Decrement} text="Decrement" color="red" />
          <Button handleChange={Reset} text="Reset" color="black" />
          <Button handleChange={Increment} text="increment" color="green" />

        </div>
 <input
        type="number"
        value={state}
        onChange={(e) => dispatch(e.target.value)}
        placeholder="number"
        style={{width:"150px",marginTop:"1rem", height:"50px", outline:"transparent",backgroundColor:"rgb(48, 40, 72)",color:"white", border:"3px solid darkorange", borderRadius:"10px"}}
      />
    </div>
  )
}

export default UseReducer