function Hero() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen">
    
      <section className="w-full md:w-1/2 bg-gray-300 flex flex-col justify-center items-center px-8 py-12">
        <div className="space-y-3 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Hi, I am
          </h2>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Muhammad Wahyu Pratama
          </h1>

          <p className="text-lg md:text-xl text-gray-700">
            Front-end Developer / UI Designer
          </p>
        </div>

       
        <div className="flex gap-6 mt-10">
          <a
            href="https://github.com/MuhammadWahyuPratama"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white rounded-lg shadow flex items-center justify-center hover:scale-110 duration-300"
          >
            <img
              className="w-6"
              src="/assets/github.png"
              alt="GitHub"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-wahyu-pratama-920559393/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white rounded-lg shadow flex items-center justify-center hover:scale-110 duration-300"
          >
            <img
              className="w-8"
              src="/assets/LinkedIn_Logo.svg.png"
              alt="LinkedIn"
            />
          </a>
        </div>
      </section>

     
      <section className="w-full md:w-1/2 bg-gray-300 flex justify-center items-center p-8">
        <div className="w-72 md:w-[450px] lg:w-[550px]">
          <img
            className="w-full rounded-xl"
            src="/assets/wahyu1.png"
            alt="Muhammad Wahyu Pratama"
          />
        </div>
      </section>
    </main>
  );
}

export default Hero;