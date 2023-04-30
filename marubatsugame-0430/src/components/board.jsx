import Square from "./square";

const Board = () => {
  return (
    <>
      <div className="squareRow">
        <Square value="1" />
        <Square value="1" />
        <Square value="1" />
      </div>
      <div className="squareRow">
        <Square value="1" />
        <Square value="1" />
        <Square value="1" />
      </div>
      <div className="squareRow">
        <Square value="1" />
        <Square value="1" />
        <Square value="1" />
      </div>
    </>
  )
}

export default Board;