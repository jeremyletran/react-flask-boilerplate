"use strict";
import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import Index from "./containers/Index";
import 'bootstrap/dist/css/bootstrap.css';
import jss from "jss";
import jssVendorPrefixer from "jss-vendor-prefixer";
import jssPx from "jss-px";
import jssNested from "jss-nested";
import jssCamelCase from "jss-camel-case";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import promise from "redux-promise";

jss.use(jssVendorPrefixer());
jss.use(jssPx());
jss.use(jssNested());
jss.use(jssCamelCase());

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  promise,
  createLogger()
)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Route exact path="/" component={Index} />
      {/* <Route exact path="/example" component={Example_One} />
        <Route path="/example/:id" component={Example_Detail} /> */}
      {/* <DevTools /> */}
    </Provider>
  </Router>,
  document.getElementById("root")
);
