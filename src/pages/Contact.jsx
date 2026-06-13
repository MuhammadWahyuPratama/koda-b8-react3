import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const savedMessages =
      JSON.parse(localStorage.getItem("messages")) || [];
    setMessages(savedMessages);
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newMessages = [...messages, formData];

    setMessages(newMessages);

    localStorage.setItem("messages", JSON.stringify(newMessages));

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-300 text-white flex flex-col items-center px-6 py-16">

        
        <section className="w-full max-w-6xl bg-gray-900 rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

          
          <div className="p-10 flex flex-col justify-center">
            <p className="text-orange-500 font-semibold tracking-widest uppercase">
              Contact Me
            </p>

            <h1 className="text-4xl font-bold mt-4">
              Let's Work Together
            </h1>

            <p className="text-gray-400 mt-6 leading-8">
              Interested in working together or have a project in mind?
              Feel free to contact me through the form or using the
              information below.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <h3 className="text-orange-500 font-semibold">Email</h3>
                <p className="text-gray-300">
                  muhammad123wahyu123@gmail.com
                </p>
              </div>

              <div>
                <h3 className="text-orange-500 font-semibold">Phone</h3>
                <p className="text-gray-300">
                  +62 823-7211-3442
                </p>
              </div>

              <div>
                <h3 className="text-orange-500 font-semibold">Location</h3>
                <p className="text-gray-300">
                  Depok City, Indonesia
                </p>
              </div>
            </div>
          </div>

         
          <div className="p-10">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block mb-2 text-sm">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-lg bg-gray-600 p-4 outline-none border border-transparent focus:border-orange-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-lg bg-gray-600 p-4 outline-none border border-transparent focus:border-orange-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">
                  Message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full rounded-lg bg-gray-600 p-4 outline-none border border-transparent focus:border-orange-500 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 transition rounded-lg py-4 font-semibold"
              >
                Send Message
              </button>

            </form>
          </div>

        </section>

       
        <section className="w-full max-w-6xl mt-10">

          <h2 className="text-3xl font-bold text-black mb-6">
            Submitted Messages
          </h2>

          {messages.length === 0 ? (
            <div className="bg-white rounded-xl shadow p-6">
              <p className="text-gray-600">
                Belum ada pesan yang dikirim.
              </p>
            </div>
          ) : (
            <div className="space-y-5">

              {messages.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow p-6"
                >
                  <h3 className="text-xl font-bold text-black">
                    {item.name}
                  </h3>

                  <p className="text-gray-500">
                    {item.email}
                  </p>

                  <p className="mt-4 text-gray-700">
                    {item.message}
                  </p>
                </div>
              ))}

            </div>
          )}

        </section>

      </main>
    </>
  );
}

export default Contact;