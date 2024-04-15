import React from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phoneNumber: "",
    goals: "",
  });

  console.log(formData);

  const form = React.useRef();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMP_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );
      if (response.status === 200) {
        alert("✅Your message has been sent successfully!");
      }
    } catch (error) {
      alert("❌Failed to send the message, please try again later");
      console.log(error);
    } finally {
      setFormData({
        name: "",
        phoneNumber: "",
        email: "",
        goals: "",
      });
    }
  };

  return (
    <div className="text-white font-abahaya">
      <h1 className="font-semibold text-5xl flex flex-col justify-center items-center">
        <p>Fuel Your Brand&#39;s</p>
        <p>
          Goals with <span className="text-[#676CE7]">Beyond</span>
        </p>
      </h1>

      <div className="flex justify-center items-center flex-col text-[#CECECE] my-4 text-lg">
        <p>
          You will get a response within 24 hours. We will explain in details
          how we can help
        </p>
        <p>you fuel and grow your brand within the stated budget.</p>
      </div>

      <form
        className="flex flex-col justify-center items-center"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          type="text"
          value={formData.name}
          name="name"
          onChange={handleChange}
          className="border-b-2 min-w-80 px-6 py-2 bg-transparent placeholder:text-xl placeholder:text-white outline-none text-xl mb-3"
          placeholder="Name"
        />
        <input
          type="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
          className="border-b-2 min-w-80 px-6 py-2 bg-transparent placeholder:text-xl placeholder:text-white outline-none text-xl mb-3"
          placeholder="Email"
        />
        <input
          type="text"
          value={formData.phoneNumber}
          name="phoneNumber"
          onChange={handleChange}
          className="border-b-2 min-w-80 px-6 py-2 bg-transparent placeholder:text-xl placeholder:text-white outline-none text-xl mb-3"
          placeholder="Phone number"
        />
        <input
          type="text"
          value={formData.goals}
          name="goals"
          onChange={handleChange}
          className="border-b-2 min-w-80 px-6 py-2 bg-transparent placeholder:text-xl placeholder:text-white outline-none text-xl mb-3"
          placeholder="Goals"
        />
        <button className="text-xl mt-3 border rounded-md px-3 py-1">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
