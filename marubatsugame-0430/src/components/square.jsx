// import { useState } from "react";

const Square = ({value}) => {
  // const [value, setValue] = useState(null);

  // const handleClick = () => {
  //   setValue('X');
  // }
  return (
    // <div className="square" onClick={handleClick}>{value}</div>
    <div className="square">{value}</div>
  );
}

export default Square;