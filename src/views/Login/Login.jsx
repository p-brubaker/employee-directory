import Auth from '../Auth/Auth';

export default function Login() {
  return (
    <div>
      <p>Welcome Back!</p>
      <Auth isSigningUp={false} />
    </div>
  );
}
