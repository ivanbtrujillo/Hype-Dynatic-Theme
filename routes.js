import React from 'react';
import { Route, IndexRoute } from 'react-router';
//Componente comun a todos los temas que recupera los datos
import ContainerComponent from '../../ContainerComponent.jsx';
import App from './App.jsx';
import Landing from './Landing.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="*" component={ContainerComponent} />
  </Route>
);
