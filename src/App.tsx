import React, { Component } from 'react';
import { IonApp } from '@ionic/react';
import Home from './pages/Home/Home';
import Landing from './pages/Home/Landing'
import InfoCardContent from './pages/GetInformed/InfoCardContent/InfoCardContent';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import './App.scss';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <IonApp className="app">
        <Router>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          <Route exact path="/home/*/*">
            <Redirect to="/home/0" />
          </Route>

          <Route exact path="/home" component={Landing} />
          <Route exact path="/home/:contentIndex" component={Home} />
          <Route exact path="/info-card/:id" component={InfoCardContent} />
        </Router>
      </IonApp>
    )
  }
}

export default App;
