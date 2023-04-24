import { useState } from 'react';
import './App.css';


const Square = () => {
  const [value, setValue] = useState(null);
  const handleClick = () => {
    setValue('X');
  }
  return <button className="square" onClick={handleClick}>{value}</button>;
}


const Board = () => {
  return (
    //フラグメントでラップしiないといけない
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

export default Board;
//メイン関数であり、外部からimport可能
