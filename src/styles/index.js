import styled from 'styled-components';

export const Header_Container = styled.header`
  box-shadow: 0 3px 5px 0 grey;
  .Header__box {
    height: 40px;
    width: 60%;
    margin: 0 auto;
  }
  .Header__title {
    line-height: 40px;
    font-size: 1.32rem;
    font-weight: 600;
    text-align: center;
  }
  @media (max-width: 1024px) {
    .Header__box {
      width: 82%;
    }
  }
  @media (max-width: 768px) {
    .Header__box {
      width: 98%;
    }
  }
`;

export const Menu_Wrapper = styled.div`
  width: 98%;
  margin: 0 auto 10px;
  height: 50px;
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  button {
    cursor: pointer;
    margin-left: 5px;
    padding: 5px;
    border-radius: 3px;
    border: 2px solid #3937a3;
    color: #3937a3;
    background-color: white;
  }
  p {
    font-weight: 600;
  }
`;

export const Main_Container = styled.main`
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

export const GameOver_P = styled.p`
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

export const ChoosePlayerType_Container = styled.div`
  width: 36%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.4rem;
    font-weight: 600;
    margin: 2rem 0 1rem;
    text-decoration: underline;
  }

  button {
    width: 60%;
    margin: 1rem 0;
    background-color: #5b0eaf;
    color: white;
    border: 2px solid #5b0eaf;
    padding: 5px;
    transition: 0cubic-bezier(0.39, 0.575, 0.565, 1);
    cursor: pointer;
    font-size: 1.12rem;
    font-weight: 500;
    box-shadow: 0 3px 10px 0 black;
    border-radius: 5px;
    &:hover {
      background-color: white;
      color: #5b0eaf;
      box-shadow: none;
    }
  }

  @media (max-width: 768px) {
    width: 96%;
    button {
      width: 90%;
    }
  }
`;
