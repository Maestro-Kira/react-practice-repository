import { ChangeEvent, FormEvent, useState } from "react";

interface formData {
  name: string;
  email: string;
}

const ContactForm = () => {
  const [userInfo, setUserInfo] = useState<formData>({
    name: "",
    email: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;

    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form Submitted", userInfo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          placeholder="Type your name.."
          value={userInfo.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          placeholder="Type your email.."
          value={userInfo.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>

      <h1>User info</h1>
      <h2>name: {userInfo.name}</h2>
      <h2>email: {userInfo.email}</h2>
    </form>
  );
};
export default ContactForm;
