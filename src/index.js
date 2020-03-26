import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import App from './ui/App'
import Paises from './ui/Paises'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/paises" component={Paises} />
        </Switch>
     </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
