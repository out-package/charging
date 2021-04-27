import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {runFunction} from './utils';

const pages = import.meta.glob('./pages/*/*.tsx');

export default async () => {
  const pageInfos = await Promise.all(Object.values(pages).map(runFunction));
  return () => (
    <Router>
      <Switch>
        {pageInfos.map(({default: Component, ...props}, index) => (
          <Route exact {...props} key={index}>
            <Component />
          </Route>
        ))}
      </Switch>
    </Router>
  );
};
