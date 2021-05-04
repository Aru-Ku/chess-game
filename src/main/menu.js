import { Menu_Wrapper } from '../styles';

export default function Menu({ handleReset, handleUndo, head }) {
  return (
    <Menu_Wrapper>
      <p>{head}</p>
      <div style={{ flexGrow: 1 }}></div>
      <button className="undo" onClick={handleUndo}>
        UNDO
      </button>
      <button className="reset" onClick={handleReset}>
        RESET
      </button>
    </Menu_Wrapper>
  );
}
