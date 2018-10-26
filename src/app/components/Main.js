import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LINKS } from '../constants';
import notFound from '../pages/NotFound';

function Main() {
  return (
    <main>
      <Switch>
        {LINKS.map(item => (
          <Route
            exact
            key={item.name}
            path={item.path}
            component={item.component}
          />
        ))}
        <Route exact path="/404" component={notFound} />
        <Redirect from="*" to="/404" />
      </Switch>
    </main>
  );
}

export default Main;
