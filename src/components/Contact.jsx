import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from "react-icons/fa";

const ContactIcon = ({ Icon, title, link }) => (
  <a
    href={link}
    className="flex flex-col items-center group cursor-pointer"
    title={title}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className="w-8 h-8 text-gray-600 group-hover:text-blue-500 transition-colors duration-300" />
    <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{title}</span>
  </a>
);

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
        
        <div className="flex justify-center space-x-12">
          <ContactIcon
            Icon={FaEnvelope}
            title="Email"
            link="mailto:jackson.raymond07@gmail.com"
          />
          <ContactIcon
            Icon={FaLinkedin}
            title="LinkedIn"
            link="https://www.linkedin.com/in/jackson-raymond07/"
          />
          <ContactIcon
            Icon={FaGithub}
            title="GitHub"
            link="https://github.com/jackson-07"
          />
          <ContactIcon
            Icon={FaMedium}
            title="Medium"
            link="https://medium.com/@jackson.raymond07"
          />
        </div>
      </div>
    </section>
  );
}