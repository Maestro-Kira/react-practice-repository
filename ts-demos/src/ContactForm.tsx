import { FormEvent, useRef, useState } from "react";
interface UserInfo {
  name: string;
  email: string;
  age: number;
}

const ContactForm = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    email: "",
    age: 0,
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const age = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const ageValue = age.current!.value;

    setUserInfo({
      name: nameValue,
      email: emailValue,
      age: +ageValue,
    });
  };
  return (
    <div>
      <br />
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Please type your name" ref={name} />
        <input type="email" placeholder="Please type your email" ref={email} />
        <input type="number" placeholder="Please type your age" ref={age} />
        <br />
        <button type="submit">Submit Form</button>
      </form>

      <h2>User data:</h2>
      <p>Name : {userInfo.name}</p>
      <p>Email : {userInfo.email}</p>
      <p>Age : {userInfo.age}</p>
    </div>
  );
};
export default ContactForm;
