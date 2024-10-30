import profilePic from "../assets/Jackson Raymond-2.jpg";
export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                  Jackson Raymond
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600">
                  Software Engineer
                </p>
                <div className="flex gap-4 flex-wrap justify-center md:justify-start">
                  {["React", "JavaScript", "TypeScript", "Node.js"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-white rounded-full text-sm text-gray-600 shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative">
                <img
                  src={profilePic}
                  alt="Jackson Raymond"
                  className="rounded-lg w-72 h-72 md:w-96 md:h-96 object-cover shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-sm font-medium text-gray-900">Currently working on</div>
                  <div className="text-sm text-gray-600">Thane v1.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}