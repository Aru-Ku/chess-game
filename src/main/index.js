import { useLayoutEffect, useState } from 'react';
import { GameOver_P, Main_Container } from '../styles';
import Chessboard from 'chessboardjsx';
import { DIV_SELECTION_STRING, FEN, SET_BOARD_WIDTH } from '../lib/constants';
import Chess from 'chess.js';
import Menu from './menu';

export { default as ChoosePlayerType } from './choosePlayerType';

export default function Main({ playerType }) {
  const [chess] = useState(Chess(FEN));
  const [fen, setFen] = useState(chess.fen());
  const [isGameOver, setGameOver] = useState(false);
  const [selectedSquare, setSelectedSquare] = useState('');

  useLayoutEffect(() => {
    setTimeout(() => {
      console.clear();
    }, 300);
  }, []);

  const handleReset = () => {
    chess.reset();
    setFen(chess.fen());
  };

  const handleUndo = () => {
    chess.undo();
    if (!chess.game_over()) setGameOver(false);
    setFen(chess.fen());
  };

  const heightLightSquares = sq => {
    removeHighlightedSquares();
    const selection = DIV_SELECTION_STRING(sq);
    const divs = document.querySelectorAll(selection);
    Array.from(divs).forEach(div => {
      div.style.border = '3px solid red';
      div.style.borderRadius = '7px';
    });
  };

  const removeHighlightedSquares = () => {
    const divs = document.querySelectorAll('div[data-squareid]');
    Array.from(divs).forEach(div => {
      div.style.border = 'none';
      div.style.borderRadius = '0';
    });
  };

  const handleSquareClicks = s => {
    if (!selectedSquare) {
      setSelectedSquare(() => s);
      heightLightSquares([s, ...chess.moves({ square: s })]);
    } else {
      setSelectedSquare(() => '');
      removeHighlightedSquares();
      const move = { from: selectedSquare, to: s, promotion: 'q' };

      if (chess.move(move)) {
        if (playerType === 'Computer') {
          setTimeout(() => {
            const moves = chess.moves();
            if (moves.length > 0) {
              chess.move(moves[Math.floor(Math.random() * moves.length)]);
              setFen(chess.fen());
            }
          }, 300);
        }
        setFen(chess.fen());
        if (chess.game_over()) setGameOver(true);
      }
    }
  };

  return (
    <Main_Container>
      <Menu handleReset={handleReset} handleUndo={handleUndo} head={`You VS ${playerType}`} />
      <Chessboard
        allowDrag={() => false}
        position={fen}
        boardStyle={{
          margin: '0 auto',
          boxShadow: '0 0 0 2px black, 0 0 0 5px #d18b47, 0 0 14px 3px black',
        }}
        lightSquareStyle={{ backgroundColor: '#ffce9e' }}
        darkSquareStyle={{ backgroundColor: '#d18b47' }}
        sparePieces={!true}
        calcWidth={SET_BOARD_WIDTH}
        onSquareClick={s => !isGameOver && handleSquareClicks(s)}
      />
      {isGameOver ? <GameOver_P>GAME OVER</GameOver_P> : null}
    </Main_Container>
  );
}
