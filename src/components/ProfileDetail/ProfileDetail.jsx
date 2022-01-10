export default function ProfileDetail({ profile }) {
  return (
    <div>
      <p>{`name: ${profile.name}`}</p>
      <p>{`email: ${profile.email}`}</p>
      <p>{`birthday: ${profile.birthday}`}</p>
      <p>{`bio: ${profile.bio}`}</p>
    </div>
  );
}
