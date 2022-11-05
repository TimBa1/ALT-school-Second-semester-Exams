import React, { useEffect, useState } from "react";
import Button from "../components/Button";

const CustomHook = () => {
  const [count, setCount] = useState(0);
  const Increase = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };
  const Reset = () => {
    setCount(0);
  };
  // const Value = (e)=>{
  //     setCount(count +1 )
  // }

  useEffect(() => {
    document.title = "count:" + count;
  });

  return (
    <div className="mt-6">
        <div style={{color:"darkorange",fontFamily:"fantasy", fontSize:"45px" ,marginTop:"-10rem", marginBottom:"5rem"}}>
            Counter App with custom hooks
        </div>
      <h1>Count:{count}</h1>
      <div className="d-flex">
        <Button handleChange={Decrement} text="Decrement" color="red" />
        <Button handleChange={Reset} text="Reset" color="Black" />
        <Button handleChange={Increase} text="Increment" color="Green" />
      </div>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        placeholder="number"
        style={{width:"150px",marginTop:"1rem", height:"50px", outline:"transparent",backgroundColor:"rgb(48, 40, 72)",color:"white", border:"3px solid darkorange", borderRadius:"10px"}}
      />
    </div>
  );
};

export default CustomHook;
