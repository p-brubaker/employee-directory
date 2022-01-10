import { useUser } from '../../../context/UserContext';
import AuthButton from '../../../components/AuthButton/AuthButton';

export default function Header() {
  const { user } = useUser();

  return (
    <div>
      <p>Acme Employee Directory</p>
      <div>
        <p>Not Signed In</p>
        <AuthButton />
      </div>
    </div>
  );
}
