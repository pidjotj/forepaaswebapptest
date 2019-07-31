/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage';
import SearchPage from '../SearchPage';
import MovieDetailsPage from '../MovieDetailsPage';

// import HomePage from 'containers/HomePage/Loadable';
// import FeaturePage from 'containers/FeaturePage/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';
// import Header from 'components/Header';
// import Footer from 'components/Footer';
import './style.css';
import Header from '../../components/Header';

const App = () => (
  <div className="h-screen w-screen background">
    <div className="app-wrapper">
      <Helmet
        titleTemplate="%s - Movie Finder"
        defaultTitle="Movie Finder"
      >
        <meta name="description" content="A React.js Boilerplate application for ForePaas technical test" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/details" component={MovieDetailsPage} />
      </Switch>
    </div>
  </div>
);

export default App;
