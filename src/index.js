import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

/**
 * GLOBAL STYLES
 */
const GlobalStyles = createGlobalStyle`
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
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
