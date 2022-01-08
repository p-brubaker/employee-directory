import ProfileDetail from '../../components/ProfileDetail/ProfileDetail';
import CreateProfile from '../CreateProfile/CreateProfile';
import {
  createProfile,
  updateProfile,
  getProfile,
} from '../../services/profiles';
import { useState, useEffect } from 'react';

export default function Profile() {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState(null);

  function handleSetProfile(res) {
    setProfile({
      name: res.name,
      email: res.email,
      bio: res.bio,
      birthday: res.birthday,
    });
  }

  async function handleChangeProfile(data) {
    try {
      const res = profile
        ? await updateProfile(data)
        : await createProfile(data);
      setProfile({
        name: res[0].name,
        email: res[0].email,
        bio: res[0].bio,
        birthday: res[0].birthday,
      });
      setEditing(false);
    } catch (err) {
      throw new Error(err);
    }
  }

  useEffect(() => {
    async function get() {
      const res = await getProfile();
      handleSetProfile(res);
    }
    try {
      get();
    } catch {
      setEditing(true);
      handleSetProfile({ name: '', email: '', bio: '', birthday: '' });
    }
  }, []);

  if (!profile) return <p>Loading...</p>;
  return (
    <div>
      <CreateProfile
        profile={profile}
        handleChangeProfile={handleChangeProfile}
        editing={editing}
        setEditing={setEditing}
      />
      {!editing ? <ProfileDetail profile /> : <></>}
    </div>
  );
}
