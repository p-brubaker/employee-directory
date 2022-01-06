import { useForm } from '../../hooks/useForm';
import { useState } from 'react';

export default function Auth({ isSigningUp = false }) {
  const [user, setUser] = useState(null);

  const { formState, formError, handleFormChange, setFormError } = useForm({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formState;

    try {
      setLoading(true);
      const user = await onSubmit({
        email: formState.email,
        password: formState.password,
      });
      if (user.id) {
        setUser(user);
      }
    } catch (error) {
      setLoading(false);
      setFormError(error.message);
    }
  };

  return (
    <div>
      <p>{isSigningUp ? 'Sign Up' : 'Sign In'}</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          id="email"
          value={formState.email}
          onChange={(e) => handleFormChange(e)}
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          id="password"
          value={formState.password}
          onChange={(e) => handleFormChange(e)}
        />
        {loading ? (
          <button>Authenticating</button>
        ) : (
          <button>{isSigningUp ? 'Sign Up' : 'Sign In'}</button>
        )}
        {formError && <p>{formError}</p>}
      </form>
    </div>
  );
}
