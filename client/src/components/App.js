import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { UserProvider } from '../contexts/UserContext';

import '../styles/App.scss';
import MapPage from './pages/MapPage';
import NavigationBar from './navigationBar/NavigationBar';
import { ToursProvider } from '../contexts/TourContext';

export default function App() {
  return (
    <UserProvider>
      <ToursProvider>
        <Router basename={process.env.PUBLIC_URL}>
          <NavigationBar />
          <Switch>
            <Route exact path='/map'>
              <MapPage />
            </Route>
            <Route path='*'>
              <Redirect to='/map' />
            </Route>
          </Switch>
        </Router>
      </ToursProvider>
    </UserProvider>
  );
}
