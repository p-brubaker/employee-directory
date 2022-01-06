import Auth from '../Auth/Auth';

export default function CreateAccount({ isSigningUp = false }) {
  return (
    <div>
      <p>Welcome!</p>
      <Auth isSigningUp />
      <p>Already have an account? Sign in</p>
    </div>
  );
}
