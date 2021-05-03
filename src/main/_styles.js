import styled from 'styled-components';

export const MainComponent = styled.main`
  width: 450px;
  margin: 10px auto 0;
  position: relative;
  div[draggable] {
    cursor: pointer !important;
  }
  div[data-squareid] div div {
    font-size: 12px !important;
    color: black !important;
    font-weight: 700;
    font-family: sans-serif !important;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 559px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  width: 98%;
  margin: 0 auto 10px;
  height: 50px;
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  button {
    cursor: pointer;
    margin-left: 5px;
    border-radius: 3px;
    border: 2px solid #3937a3;
    color: #3937a3;
    background-color: white;
  }
`;

export const GameOver = styled.p`
  font-size: 2.2em;
  color: red;
  font-weight: 600;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-shadow: 0 0 20px black;
  z-index: 100;
`;
