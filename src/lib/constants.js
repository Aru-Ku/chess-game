export const FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

const SQUARE = /[a-zA-Z][1-8]/;
const TAG = 'div[data-squareid=';

export const DIV_SELECTION_STRING = Q =>
  Q.reduce((a, v, i) => a + `${TAG}'${v.match(SQUARE)[0]}']${i === Q.length - 1 ? '' : ', '}`, '');

export const SET_BOARD_WIDTH = ({ screenWidth: w }) => {
  if (w > 768) return 450;
  if (w <= 768 && w > 560) return w - 200;
  if (w <= 559) return w - 20;
};
