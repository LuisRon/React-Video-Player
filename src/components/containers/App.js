import React from 'react';
import Player from './Player';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';

const App = () => (

  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={Player} />
        <Route exact path='/:activeVideo' component={Player} />
      </Switch>
      <GlobalStyle />
    </React.Fragment>
  </BrowserRouter>

)

export default App;