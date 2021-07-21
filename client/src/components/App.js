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
import HeaderContentLayout from './common/HeaderContentLayout';
import NavigationBar from './navigationBar/NavigationBar';
import UserPage from './pages/UserPage';
import { ToursProvider } from '../contexts/TourContext';

export default function App() {
  return (
    <UserProvider>
      <ToursProvider>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <HeaderContentLayout
              header={<NavigationBar />}
              content={
                <>
                  <Route exact path='/map'>
                    <MapPage />
                  </Route>
                  <Route exact path='/user'>
                    <UserPage />
                  </Route>
                  <Route path='*'>
                    <Redirect to='/map' />
                  </Route>
                </>
              }
            />
          </Switch>
        </Router>
      </ToursProvider>
    </UserProvider>
  );
}
