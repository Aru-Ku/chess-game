import styled, { createGlobalStyle } from 'styled-components';

/**
 * GLOBAL STYLES
 */
export const GlobalStyles = createGlobalStyle`
  *, *:after, *:before { box-sizing: border-box; }
  body, h1, h2, h3, h4, h5, h6, p, ul, ol { margin: 0; padding: 0; }
  ul, ol { list-style: none; }
  a { color: inherit; text-decoration: none;}
  input, button, textarea { outline: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
      'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  div#root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

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
  flex: 1;
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
  align-items: center;
  flex: 1;
  p {
    font-size: 1.4rem;
    font-weight: 600;
    margin: 2rem 0 1rem;
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

export const Footer_Container = styled.footer`
  height: 100px;
  width: 100%;
  box-shadow: 0 -3px 5px 0 grey;
  padding-top: 20px;
  text-align: center;
  h2 {
    font-size: 1.1rem;
    font-weight: 600;
    padding-bottom: 8px;
    text-decoration: underline;
  }
  a {
    margin: 0 8px;
    cursor: pointer;
  }
  a img {
    width: 30px;
    height: 30px;
  }
`;
