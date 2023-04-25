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
  const [squares, seSquares] = useState(Array(9).fill(null));
  return (
    //フラグメントでラップしiないといけない
    <>
      <div className="board-row">
        <Square value={squares[0]}/>
        <Square value={squares[1]}/>
        <Square value={squares[2]}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]}/>
        <Square value={squares[4]}/>
        <Square value={squares[5]}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]/>
        <Square value={squares[7]/>
        <Square value={squares[8]/>
      </div>
    </>
  );
}

export default Board;
//メイン関数であり、外部からimport可能
