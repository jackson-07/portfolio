import profilePic from "../assets/Jackson Raymond-2.jpg";

export default function Hero() {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Jackson Raymond
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8">
              Software Engineer
            </p>
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              Get in Touch
            </a>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={profilePic}
              alt="Jackson Raymond"
              className="rounded-lg w-64 h-64 md:w-96 md:h-96 object-cover mx-auto md:ml-auto shadow-lg"/>
          </div>
        </div>
      </div>
    </section>
  );
}
