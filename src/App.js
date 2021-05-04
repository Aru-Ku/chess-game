import { useState } from 'react';
import Header from './header';
import Main, { ChoosePlayerType } from './main';

function App() {
  const [playerType, setPlayerType] = useState('');
  return (
    <>
      <Header />
      {!!playerType ? <Main playerType={playerType} /> : <ChoosePlayerType set={setPlayerType} />}
    </>
  );
}

export default App;
