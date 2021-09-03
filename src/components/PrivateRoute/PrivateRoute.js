import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({user, children, ...rest}) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;