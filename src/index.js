import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import App from './ui/App'
import Paises from './ui/Paises'
import Covid19 from './ui/Covid19'
import Protejase from './ui/Protejase'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/paises" component={Paises} />
            <Route path="/covid19" component={Covid19} />
            <Route path="/protejase" component={Protejase} />
        </Switch>
     </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
