import { Link, Redirect } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Acme Intuitive Intranet!</h1>
      <p>
        As an employee of Acme Inc., you're required to provide some personal
        information which will definitely never be used against you.
      </p>
      <p>Create an account, then log in and fill out the requested details</p>
      <p>Thank you for your participation</p>

      <p>Create Account or Sign in</p>
    </div>
  );
}
