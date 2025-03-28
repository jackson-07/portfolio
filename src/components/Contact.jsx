import React, { useMemo } from 'react';
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from "react-icons/fa";

const ContactIcon = React.memo(({ Icon, title, link }) => (
  <a
    href={link}
    className="flex flex-col items-center group cursor-pointer"
    title={title}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${title} Contact Link`}
  >
    <Icon 
      className="w-8 h-8 text-gray-600 group-hover:text-blue-500 transition-colors duration-300" 
      aria-hidden="true"
    />
    <span 
      className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      aria-hidden="true"
    >
      {title}
    </span>
  </a>
));

export default function Contact() {

  const contactLinks = useMemo(() => [
    {
      Icon: FaEnvelope,
      title: "Email",
      link: "mailto:jackson.raymond07@gmail.com"
    },
    {
      Icon: FaLinkedin,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/jackson-raymond07/"
    },
    {
      Icon: FaGithub,
      title: "GitHub",
      link: "https://github.com/jackson-07"
    },
    {
      Icon: FaMedium,
      title: "Medium",
      link: "https://medium.com/@jackson.raymond07"
    }
  ], []);

  return (
    <section 
      id="contact" 
      className="bg-gray-100 py-16 sm:py-24"
      aria-labelledby="contact-section-title"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 
          id="contact-section-title"
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
        >
          Contact Me
        </h2>
        <p 
          className="text-xl text-gray-700 mb-8"
        >
          Feel free to reach out to me through any of these platforms
        </p>
        
        <div 
          className="flex justify-center space-x-12"
          role="list"
          aria-label="Contact Links"
        >
          {contactLinks.map(({ Icon, title, link }) => (
            <ContactIcon
              key={title}
              Icon={Icon}
              title={title}
              link={link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}