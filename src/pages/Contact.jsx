import Navbar from "../components/Navbar";


function Contact() {
  return (

   

    <>

    <Navbar />
    <main className="min-h-screen bg-gray-300 text-white flex items-center justify-center px-6 py-16">
      <section className="w-full max-w-6xl bg-gray-900 rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        <div className="p-10 flex flex-col justify-center">
          <p className="text-orange-500 font-semibold tracking-widest uppercase">
            Contact Me
          </p>

          <h1 className="text-4xl font-bold mt-4">Let's Work Together</h1>

          <p className="text-gray-400 mt-6 leading-8">
            Interested in working together or have a project in mind? Feel free
            to contact me through the form or using the information below.
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <h3 className="text-orange-500 font-semibold">Email</h3>
              <p className="text-gray-300">muhammad123wahyu123@gmail.com</p>
            </div>

            <div>
              <h3 className="text-orange-500 font-semibold">Phone</h3>
              <p className="text-gray-300">+62 823-7211-3442</p>
            </div>

            <div>
              <h3 className="text-orange-500 font-semibold">Location</h3>
              <p className="text-gray-300">Depok City, Indonesia</p>
            </div>
          </div>
        </div>

       
        <div className=" p-10">
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm">Full Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-lg bg-gray-600 p-4 outline-none border border-transparent focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg bg-gray-600 p-4 outline-none border border-transparent focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">Message</label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full rounded-lg bg-gray-600 p-4 outline-none border border-transparent focus:border-orange-500 resize-none"
              ></textarea>
            </div>

            <button className="w-full bg-orange-500 hover:bg-orange-600 transition rounded-lg py-4 font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
    </>
  );
}

export default Contact;
