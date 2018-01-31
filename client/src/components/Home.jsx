import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Portfolio from './Portfolio';
import Photography from './Photography';
import About from './About';
import Contact from './Contact';

const Home = props => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Portfolio} />
        <Route path="/photography" component={Photography} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

Home.propTypes = {

};

export default Home;