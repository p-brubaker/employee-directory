import { useForm } from '../../hooks/useForm';

export default function CreateProfile({
  profile,
  editing,
  setEditing,
  handleChangeProfile,
}) {
  const { formState, formError, handleFormChange, setFormError } = useForm({
    email: profile.email,
    name: profile.name,
    bio: profile.bio,
    birthday: profile.birthday,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, name, bio, birthday } = formState;
    try {
      await handleChangeProfile({ email, name, bio, birthday });
    } catch (error) {
      setFormError(error.message);
    }
  };

  return editing ? (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          id="name"
          value={formState.name}
          onChange={(e) => handleFormChange(e)}
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          id="email"
          type="email"
          value={formState.email}
          onChange={(e) => handleFormChange(e)}
        />
        <label htmlFor="birthday">Birthday</label>
        <input
          name="birthday"
          id="birthday"
          type="date"
          value={formState.birthday}
          onChange={(e) => handleFormChange(e)}
        />
        <label htmlFor="bio">Tell us a little about yourself</label>
        <textarea
          name="bio"
          id="bio"
          value={formState.bio}
          onChange={(e) => handleFormChange(e)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  ) : (
    <button onClick={() => setEditing(true)}>
      {profile ? 'Edit' : 'Update'}
    </button>
  );
}
