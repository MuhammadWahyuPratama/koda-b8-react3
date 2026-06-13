import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-300 py-16 px-6">
        <section className="max-w-6xl mx-auto">

         
          <div className="text-center mb-14">
            <h1 className="text-5xl font-bold text-gray-900">
              About Me
            </h1>

            <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

            <p className="text-gray-600 mt-5 text-lg">
              Get to know me a little better.
            </p>
          </div>

         
          <div className="bg-white rounded-3xl shadow-xl p-10 lg:p-16">

           
            <div className="space-y-6">

              <h2 className="text-3xl font-bold text-gray-900">
                Frontend Developer
              </h2>

              <p className="text-gray-600 leading-8">
                Hello! I'm Muhammad Wahyu Pratama, someone who is passionate
                about building modern, responsive, and user-friendly web
                interfaces. I enjoy learning new technologies and constantly
                improving my skills in frontend development.
              </p>

              <p className="text-gray-600 leading-8">
                Currently, I'm focusing on React.js, Tailwind CSS, and modern
                frontend development while building real-world projects to
                strengthen my portfolio and prepare for an internship as a
                Frontend Developer.
              </p>

            </div>

            
            <div className="grid md:grid-cols-2 gap-8 mt-14">

              <div className="bg-gray-100 rounded-2xl p-6">

                <h3 className="text-xl font-semibold mb-5">
                  Personal Information
                </h3>

                <ul className="space-y-3 text-gray-700">
                  <li>
                    <span className="font-semibold">Name :</span> Muhammad
                    Wahyu Pratama
                  </li>

                  <li>
                    <span className="font-semibold">Role :</span> Frontend
                    Developer
                  </li>

                  <li>
                    <span className="font-semibold">Location :</span> Depok City
                  </li>

                  <li>
                    <span className="font-semibold">Focus :</span> React &
                    Tailwind CSS
                  </li>
                </ul>

              </div>

              <div className="bg-orange-500 rounded-2xl p-6 text-white">

                <h3 className="text-xl font-semibold mb-5">
                  Career Goals
                </h3>

                <p className="leading-8">
                  My goal is to become a professional Frontend Developer who
                  creates beautiful, responsive, and high-performance web
                  applications while continuously learning modern technologies
                  and best practices.
                </p>

              </div>

            </div>

          </div>

        </section>
      </main>
    </>
  );
}

export default About;