import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ children, ...args }) {
  const user = true;

  return (
    <>
      <Route
        {...args}
        render={({ location }) =>
          user ? (
            children
          ) : (
            <Redirect to={{ pathname: '/login', state: { from: location } }} />
          )
        }
      />
    </>
  );
}
