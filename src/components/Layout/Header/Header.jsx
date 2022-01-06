export default function Header({ user = false }) {
  return (
    <div>
      <p>Acme Employee Directory</p>
      <div>
        <p>Not Signed In</p>
        <button>Sign In</button>
      </div>
    </div>
  );
}
