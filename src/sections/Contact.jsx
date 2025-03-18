import { useRef, useState } from "react";
import { LinearGradient } from "react-text-gradients";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_s6batkq",
        "template_7tsiuhi",
        {
          from_name: form.name,
          to_name: "Anzhelika",
          from_email: form.email,
          to_email: "kostyukanzhelika@gmail.com",
          message: form.message,
        },
        "_-60POSClBbKWHgNb"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong!");
        }
      );
  };

  return (
    <section className="w-full flex justify-center mb-20">
      <div className="flex flex-col w-full max-w-7xl items-center justify-start">
        <div className="w-full">
          <p className="mb-10 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal">
            <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
              Get in touch
            </LinearGradient>
          </p>
        </div>
        <div className="flex w-2/3 bg-[#32303a] p-8 rounded-xl text-white">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className=" flex flex-col gap-8  w-full"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="py-4 px-6 bg-[#46454d] rounded-lg"
                placeholder="ex. John Doe"
              />
            </label>

            <label className="flex flex-col ">
              <span className="text-white font-medium mb-4">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="py-4 px-6 bg-[#46454d] rounded-lg"
                placeholder="ex. johndoe@gmail.com"
              />
            </label>

            <label className="flex flex-col ">
              <span className="text-white font-medium mb-4">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={7}
                className="py-4 px-6 bg-[#46454d] rounded-lg"
                placeholder="Share your thoughts..."
              />
            </label>
            <button
              type="submit"
              className="bg-[#46454d] w-fit py-3 px-8 rounded-lg text-white font-bold shadow-sm shadow-slate-700 outline-none"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
