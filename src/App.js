import React, { Component } from 'react';
import { routerMiddleware } from 'react-router-redux';
import { Route, IndexRoute, Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import DevTools from './containers/DevTools';

// CONTAINERS
import Index from './templates/index';
import PageWelcome from './templates/page-welcome';
import Login from './templates/login';
import configureStore from './store/configureStore';
import { ENV_PRODUCTION } from './Util';
import './App.css';

const middleware = routerMiddleware(hashHistory);

const store = configureStore(middleware);

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <Router history={hashHistory}>
            <Route path="/" component={Index}>
              <IndexRoute component={PageWelcome} />
              <Route path="welcome" component={PageWelcome} />
            </Route>
            <Route path="/login" component={Login} />
          </Router>
          {(process.env.NODE_ENV === ENV_PRODUCTION) ? '' : <DevTools />}
        </div>
      </Provider>
    );
  }
}

export default App;

