import Auth from '../Auth/Auth';

export default function CreateAccount() {
  return (
    <div>
      <p>Welcome!</p>
      <Auth isSigningUp={true} />
      <p>Already have an account? Sign in</p>
    </div>
  );
}
