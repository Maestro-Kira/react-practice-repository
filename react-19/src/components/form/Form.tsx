import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleFormElements = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Type your Name"
          value={formData.name}
          onChange={handleFormElements}
          className="border border-black"
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Type your email"
          value={formData.email}
          onChange={handleFormElements}
          className="border border-black"
        />
        <br />

        <button
          type="submit"
          className="border border-black mt-2 px-4 py-2 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;
