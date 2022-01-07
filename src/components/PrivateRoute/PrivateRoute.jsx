import { Route, Redirect } from 'react-router-dom';
import { getUser } from '../../services/users';

export default function PrivateRoute({ children, ...args }) {
  const user = getUser();

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
