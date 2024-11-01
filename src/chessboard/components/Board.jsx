import { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import PropTypes from 'prop-types';

const Board = ({ onGameUpdate }) => {
  const [game, setGame] = useState(new Chess());
  const [fenHistory, setFenHistory] = useState([game.fen()]);

  const makeAMove = (move) => {
    const gameCopy = { ...game };
    const result = gameCopy.move(move);
    setGame(gameCopy);
    
    if (result) {
      const newFen = gameCopy.fen();
      setFenHistory([...fenHistory, newFen]);
      onGameUpdate([...fenHistory, newFen]);
    }
    return result;
  };

  const onDrop = (sourceSquare, targetSquare) => {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });
    if (move === null) return false;
    return true;
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vh' }}>
      <Chessboard position={game.fen()} onPieceDrop={onDrop} />
    </div>
  );
};

Board.propTypes = {
  onGameUpdate: PropTypes.func.isRequired,
};

export default Board;
