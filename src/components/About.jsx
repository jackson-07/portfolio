import { FaJs, FaPython, FaDatabase, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiExpress, SiDjango, SiMongodb } from "react-icons/si";
import { FiGlobe } from "react-icons/fi";

export default function About() {
  return (
    <section id="about" className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto">
          <div className="md:w-2/3">
            <p className="text-xl font-bold text-gray-700 mb-4">
              Hello, I'm Jackson, a Technical Recruiter turned Software
              Engineer and I love to work on these technologies.
            </p>
            <br />
            <div className="flex flex-wrap justify-center space-x-6 mb-6">
              <FaJs className="w-8 h-8 text-yellow-400" title="JavaScript" />
              <FaPython className="w-8 h-8 text-blue-500" title="Python" />
              <FaDatabase className="w-8 h-8 text-orange-600" title="SQL" />
              <FaReact className="w-8 h-8 text-blue-400" title="React" />
              <FaNodeJs className="w-8 h-8 text-green-500" title="Node.js" />
              <SiExpress className="w-8 h-8 text-gray-700" title="Express" />
              <SiDjango className="w-8 h-8 text-green-600" title="Django" />
              <SiMongodb className="w-8 h-8 text-green-400" title="MongoDB" />
            </div>
            <br />
            
            <div className="grid grid-cols-4 gap-6">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 flex flex-col justify-between h-48">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Codle</h3>
                </div>
                <div className="flex space-x-4 mt-4">
                  <a href="https://github.com/jackson-07/codle" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-6 h-6 text-gray-800 hover:text-gray-600" title="GitHub" />
                  </a>
                  <a href="https://jackson-07.github.io/codle/" target="_blank" rel="noopener noreferrer">
                    <FiGlobe className="w-6 h-6 text-gray-800 hover:text-gray-600" title="Live Site" />
                  </a>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 flex flex-col justify-between h-48">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Pokédex</h3>
                </div>
                <div className="flex space-x-4 mt-4">
                  <a href="https://github.com/jackson-07/pokedex" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-6 h-6 text-gray-800 hover:text-gray-600" title="GitHub" />
                  </a>
                  <a href="https://pokedex-9b5t.onrender.com/" target="_blank" rel="noopener noreferrer">
                    <FiGlobe className="w-6 h-6 text-gray-800 hover:text-gray-600" title="Live Site" />
                  </a>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 flex flex-col justify-between h-48">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Invinity</h3>
                </div>
                <div className="flex space-x-4 mt-4">
                  <a href="https://github.com/MartyEternal/inventorymanager" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-6 h-6 text-gray-800 hover:text-gray-600" title="GitHub" />
                  </a>
                  <a href="https://inventorymanager-78zc.onrender.com/" target="_blank" rel="noopener noreferrer">
                    <FiGlobe className="w-6 h-6 text-gray-800 hover:text-gray-600" title="Live Site" />
                  </a>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 flex flex-col justify-between h-48">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">iPatrol</h3>
                </div>
                <div className="flex space-x-4 mt-4">
                  <a href="https://github.com/jackson-07/ipatrol" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-6 h-6 text-gray-800 hover:text-gray-600" title="GitHub" />
                  </a>
                  <a href="https://ipatrol.onrender.com/" target="_blank" rel="noopener noreferrer">
                    <FiGlobe className="w-6 h-6 text-gray-800 hover:text-gray-600" title="Live Site" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

