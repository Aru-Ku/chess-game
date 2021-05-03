import Chessboard from 'chessboardjsx';
import { useState } from 'react';
import Chess from 'chess.js';
import Menu from './menu';

import { MainComponent, GameOver } from './_styles';

export default function Main() {
  const [chess] = useState(Chess('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'));
  const [fen, setFen] = useState(chess.fen());
  const [isGameOver, setGameOver] = useState(false);
  const [selectedSquare, setSelectedSquare] = useState('');

  const handleSetFen = () => {
    setFen(chess.fen());
  };

  const handleMove = move => {
    removeHighlightedSquares();
    if (chess.move(move)) {
      setTimeout(() => {
        const moves = chess.moves();

        if (moves.length > 0) {
          const computerMove = moves[Math.floor(Math.random() * moves.length)];
          chess.move(computerMove);
          handleSetFen();
        }
      }, 300);

      handleSetFen();
      if (chess.game_over()) setGameOver(true);
    }
  };

  const handleReset = () => {
    chess.reset();
    handleSetFen();
  };

  const handleUndo = () => {
    chess.undo();
    if (!chess.game_over()) setGameOver(false);
    handleSetFen();
  };

  const removeHighlightedSquares = () => {
    const divs = document.querySelectorAll('div[data-squareid]');
    Array.from(divs).forEach(div => {
      div.style.border = 'none';
      div.style.borderRadius = '0';
    });
  };

  const heightLightSquares = sq => {
    console.log(sq);
    removeHighlightedSquares();
    const selection = sq.reduce(
      (a, v, i) => a + `div[data-squareid='${v.match(/[a-zA-Z][1-8]/)[0]}']${i === sq.length - 1 ? '' : ', '}`,
      ''
    );
    const divs = document.querySelectorAll(selection);
    Array.from(divs).forEach(div => {
      div.style.border = '3px solid red';
      div.style.borderRadius = '7px';
    });
  };

  return (
    <MainComponent>
      <Menu handleReset={handleReset} handleUndo={handleUndo} />
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
        calcWidth={({ screenWidth: w }) => {
          if (w > 768) return 450;
          if (w <= 768 && w > 560) return w - 200;
          if (w <= 559) return w - 20;
        }}
        onSquareClick={s => {
          if (!!selectedSquare || chess.get(s)?.color !== 'b') {
            if (selectedSquare === '') {
              setSelectedSquare(() => s);
              heightLightSquares([s, ...chess.moves({ square: s })]);
            } else {
              setSelectedSquare(() => '');
              handleMove({
                from: selectedSquare,
                to: s,
                promotion: 'q',
              });
            }
          }
        }}
      />
      {isGameOver ? <GameOver>GAME OVER</GameOver> : null}
    </MainComponent>
  );
}
