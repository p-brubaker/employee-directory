import { Link, Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function Home() {
  const auth = useUser();

  if (auth.user.email) return <Redirect to="/profile" />;

  return (
    <div>
      <h1>Welcome to Acme Intuitive Intranet!</h1>
      <p>
        As an employee of Acme Inc., you're required to provide some personal
        information which will definitely never be used against you.
      </p>
      <p>Create an account, then log in and fill out the requested details</p>
      <p>Thank you for your participation</p>

      <p>
        <Link to="/register">Create Account</Link> or{' '}
        <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
}
