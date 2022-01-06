export default function Auth({ isSigningUp = false }) {
  return (
    <div>
      <p>{isSigningUp ? 'Sign Up' : 'Sign In'}</p>
      <form>
        <label htmlFor="email">Email</label>
        <input name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input name="password" id="password" />
        <button>{isSigningUp ? 'Sign Up' : 'Sign In'}</button>
      </form>
    </div>
  );
}
