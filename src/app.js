import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './pages/App.js';
import Cursos from './pages/Cursos.js';
import Sobre from './pages/Sobre.js';
import Home from './pages/Home.js';
import Curso from './components/Curso.js';

ReactDOM.render((
  <Router history={browserHistory}>
      <Route path="/" component={App} >
              <IndexRoute component={Home}/>
              <Route path="cursos" component={Cursos}>
                      <Route path=":id" component={Curso}/>
              </Route>
              <Route path="sobre" component={Sobre}/>
      </Route>
  </Router>
  ),
  document.getElementById('app')
)
