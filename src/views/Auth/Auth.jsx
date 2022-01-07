import { useForm } from '../../hooks/useForm';
import { useState } from 'react';
import { signInUser, signUpUser } from '../../services/users';

export default function Auth({ isSigningUp }) {
  const [user, setUser] = useState(null);
  const { formState, formError, handleFormChange, setFormError } = useForm({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formState;
    let onSubmit;
    if (isSigningUp) onSubmit = signUpUser;
    else onSubmit = signInUser;

    try {
      setLoading(true);
      const user = await onSubmit(email, password);
      if (user.id) {
        setUser(user);
        setLoading(false);
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
          <button type="submit">{isSigningUp ? 'Sign Up' : 'Sign In'}</button>
        )}
        {formError && <p>{formError}</p>}
      </form>
    </div>
  );
}
