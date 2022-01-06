export default function CreateProfile() {
  return (
    <div>
      <p>Create Profile</p>
      <form>
        <label htmlFor="name">Name</label>
        <input name="name" id="name" />
        <label htmlFor="email">Email</label>
        <input name="email" id="email" type="email" />
        <label htmlFor="birthday">Birthday</label>
        <input name="birthday" id="birthday" type="date" />
        <label htmlFor="tell-us">Tell us a little about yourself</label>
        <textarea name="tell-us" id="tell-us" />
      </form>
    </div>
  );
}
