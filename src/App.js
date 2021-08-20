import "./App.css";
import Board from "./board";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="heading">Tic Tac Toe</h1>
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
