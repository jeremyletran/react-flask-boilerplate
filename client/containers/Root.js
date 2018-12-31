import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import DevTools from './DevTools';
import landingPage from './landingPage';
import Index from './Index';
// import Photos from './Photos';
// import DetailedPhotos from './DetailedPhotos';

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Route exact path="/" component={Index} />
      {/* <Route exact path="/" component={landingPage} /> */}
      {/* <Route exact path="/photos" component={Photos} />
      <Route path="/photos/:id" component={DetailedPhotos} /> */}
      {/* <DevTools /> */}
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
