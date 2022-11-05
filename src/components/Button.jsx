import React from 'react'

const Button = ({text, color , handleChange}) => {
  const  myComponentStyle={
    backgroundColor: `${color}`,
    color: 'white',
    height:"50px",
    width:"200px",
    borderRadius:"10px",
    border:"none",
    cursor:"pointer",
    margin:"1rem"
  }

  return (
    <button onClick={handleChange} style={ myComponentStyle}>{text}</button>
  )
}

export default Button