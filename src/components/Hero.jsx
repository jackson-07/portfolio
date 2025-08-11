import profilePic from "../assets/Jackson Raymond-2-compressed.jpg";

export default function Hero() {
  const roles = ["Product Manager","Software Engineer", "Writer"];

  return (
    <section 
      className="bg-gradient-to-b from-gray-50 to-gray-100"
      aria-labelledby="hero-title"
    >
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <div className="space-y-6">
                <h1 
                  id="hero-title" 
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900"
                >
                  Jackson Raymond
                </h1>
                <div 
                  className="flex gap-4 flex-wrap justify-center md:justify-start"
                  role="list" 
                  aria-label="Technologies"
                >
                  {roles.map((role) => (
                    <span 
                      key={role} 
                      role="listitem"
                      className="px-4 py-2 bg-white rounded-full text-sm text-gray-600 shadow-sm"
                    >
                      {role}
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
                  loading="lazy"
                  width={384}
                  height={384}
                  className="rounded-lg w-72 h-72 md:w-96 md:h-96 object-cover shadow-xl"
                />
                
                <div 
                  className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg"
                  aria-label="Current Project"
                >
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