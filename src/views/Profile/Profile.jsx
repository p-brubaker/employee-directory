import ProfileDetail from '../../components/ProfileDetail/ProfileDetail';

export default function Profile({ profile = null }) {
  return (
    <div>
      {profile ? 'Edit Profile' : "You haven't created a profile yet"}
      {profile ? <ProfileDetail profile /> : <CreateProfile />}
    </div>
  );
}
