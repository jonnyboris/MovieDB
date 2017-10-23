/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Link, Route} from 'react-router-dom';
import Search from '../containers/Search';
import Movie from '../containers/Movie';
import Favourites from '../containers/Favourites';
import Config from '../containers/Configuration';
import NotFoundPage from './NotFoundPage';


class App extends React.Component {
  render() {
    return (
      <Config>
        <div className="appContainer">
          <div className="menuBar">
            <Link to="/" className="title">Movie DB Search</Link>
          </div>

          <div className="appContent">
            <Switch>
              <Route exact path="/" component={Search}/>
              <Route exact path="/movie/:id" component={Movie}/>
              <Route component={NotFoundPage}/>
            </Switch>

            <Favourites/>

          </div>
        </div>
      </Config>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
