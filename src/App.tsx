import React from 'react';
import { createGlobalStyle } from 'styled-components'


//Components
import MyRoutes from './routes';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
  }
  body {
    padding: 0;
    margin: 0;
  }
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <MyRoutes />
    </div>
  );
}

export default App;
