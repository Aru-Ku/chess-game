import { memo } from 'react';
import { ChoosePlayerType_Container } from '../styles';

const ChoosePlayerType = memo(({ set }) => (
  <ChoosePlayerType_Container>
    <p>Choose Player Type</p>
    <button onClick={() => set('Computer')}>Player vs Computer</button>
    <button onClick={() => set('Player2')}>Player vs Player</button>
  </ChoosePlayerType_Container>
));

export default ChoosePlayerType;
