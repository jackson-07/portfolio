import React from 'react';
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-16 sm:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
          Contact Me
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          Feel free to reach out to me through any of these platforms
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:jackson.raymond07@gmail.com"
            className="text-gray-600 hover:text-blue-500 transition duration-300"
            title="Email"
            target="_blank"
            rel="noopener noreferrer">
            <FaEnvelope className="w-8 h-8" />
          </a>
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