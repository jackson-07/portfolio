import profilePic from "../assets/Jackson Raymond-2.jpg";

export default function Hero() {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Jackson Raymond
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8">
                Software Engineer
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
              <img
                src={profilePic}
                alt="Jackson Raymond"
                className="rounded-lg w-72 h-72 md:w-96 md:h-96 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}