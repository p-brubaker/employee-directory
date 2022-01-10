import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { signOutUser } from '../../services/users';
import { useHistory } from 'react-router-dom';

export default function AuthButton() {
  const { user, setUser } = useUser();
  const history = useHistory();

  return (
    <>
      {user && user.email ? (
        <button
          onClick={async () => {
            await signOutUser();
            setUser({});
            history.replace('/');
          }}
        >
          Sign Out
        </button>
      ) : (
        <Link to="/login">
          <button>Sign In</button>
        </Link>
      )}
    </>
  );
}
