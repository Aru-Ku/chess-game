import { Wrapper } from './_styles';

export default function Menu({ handleReset, handleUndo }) {
  return (
    <Wrapper>
      <div style={{ flexGrow: 1 }}></div>
      <button className="undo" onClick={handleUndo}>
        UNDO
      </button>
      <button className="reset" onClick={handleReset}>
        RESET
      </button>
    </Wrapper>
  );
}
