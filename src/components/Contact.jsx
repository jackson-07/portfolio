import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-16 sm:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
          Contact Me
        </h2>
        <form className="max-w-lg mx-auto text-left">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
              required/>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
              required/>
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              Send Message
            </button>
          </div>
        </form>

        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="https://github.com/jackson-07"
            className="text-gray-600 hover:text-blue-500 transition duration-300"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/jackson-raymond07/"
            className="text-gray-600 hover:text-blue-500 transition duration-300"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a
            href="https://medium.com/@jackson.raymond07"
            className="text-gray-600 hover:text-blue-500 transition duration-300"
            title="Medium"
            target="_blank"
            rel="noopener noreferrer">
            <FaMedium className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}


