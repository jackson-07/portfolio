import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Terminal } from 'lucide-react';
import { FaJs, FaPython, FaDatabase, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTypescript, SiExpress, SiDjango, SiMongodb } from "react-icons/si";
import { FiGlobe } from "react-icons/fi";

const SkillIcon = React.memo(({ Icon, title }) => (
  <div
    className="flex flex-col items-center group cursor-pointer"
    role="button"
    aria-label={`Skill: ${title}`}
    tabIndex={0}
  >
    <Icon
      className={`w-8 h-8 text-gray-600 group-hover:text-blue-500 transition-colors duration-300 ${title === "JavaScript" ? "scale-125" : ""
        }`}
      aria-hidden="true"
    />
    <span
      className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      aria-hidden="true"
    >
      {title}
    </span>
  </div>
));

const ProjectCard = React.memo(({ title, description, githubLink, liveLink }) => (
  <div
    className="bg-gray-100 p-4 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-gray-200 flex flex-col justify-between h-full"
    aria-label={`Project: ${title}`}
  >
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
    <div className="flex space-x-4 mt-4">
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title} GitHub Repository`}
      >
        <FaGithub
          className="w-6 h-6 text-gray-800 hover:text-blue-600"
          aria-hidden="true"
        />
      </a>
      <a
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title} Live Website`}
      >
        <FiGlobe
          className="w-6 h-6 text-gray-800 hover:text-blue-600"
          aria-hidden="true"
        />
      </a>
    </div>
  </div>
));

const MyStory = React.memo(() => {
  const storyContent = useMemo(() => [
    {
      command: "jackson.getCurrent()",
      response: "I'm a Frontend focussed Sofware Engineer with a background in Technical Recruiting."
    },
    {
      command: "jackson.getJourney()",
      response: "As a recruiter, I have a deep understanding of what makes a great engineer, this forms my unique perspective to coding, by blending technical skill with an industry-wide view of excellence."
    },
    {
      command: "jackson.getApproach()",
      response: "With this understanding of both the technical and human aspects of software development, I strive to create clean, accessible and performant applications."
    },
    {
      command: "jackson.getWork()",
      response: "Take a look at my skills and projects below!"
    }
  ], []);

  const [storyPhase, setStoryPhase] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let isMounted = true;
    if (storyPhase < storyContent.length && isTyping) {
      const text = storyContent[storyPhase].response;
      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        if (isMounted && currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          if (isMounted) setIsTyping(false);
        }
      }, 30);

      return () => {
        isMounted = false;
        clearInterval(typingInterval);
      };
    }
  }, [storyPhase, isTyping, storyContent]);

  const handleNext = useCallback(() => {
    if (storyPhase < storyContent.length - 1) {
      setStoryPhase(prev => prev + 1);
      setIsTyping(true);
    }
  }, [storyPhase, storyContent.length]);

  const handlePrev = useCallback(() => {
    if (storyPhase > 0) {
      setStoryPhase(prev => prev - 1);
      setIsTyping(true);
    }
  }, [storyPhase]);

  const handleStart = useCallback(() => {
    setIsTyping(true);
  }, []);

  return (
    <div
      className="max-w-3xl mx-auto mt-8"
      aria-label="Jackson's Professional Journey"
    >
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <Terminal className="w-5 h-5 text-gray-600" aria-hidden="true" />
          <span className="text-gray-600 font-medium">My Journey</span>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-4 min-h-[200px] border border-gray-200">
          <div className="text-gray-600 mb-2 font-medium">
            $ {storyContent[storyPhase].command}
          </div>

          {/* Visual version (only seen, not read) */}
          <div className="text-gray-700" aria-hidden="true">
            {displayedText}
            <span className="animate-pulse text-blue-500">▊</span>
          </div>

          {/* Screen reader version (only read, not seen) */}
          <div className="sr-only" aria-live="polite">
            {isTyping ? 'Content loading...' : storyContent[storyPhase].response}
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={handlePrev}
            disabled={storyPhase === 0}
            aria-label="Previous story phase"
            className={`px-4 py-2 rounded-lg ${storyPhase === 0
              ? 'bg-gray-100 text-gray-400'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
              } transition-colors`}
          >
            Previous
          </button>

          {!isTyping && storyPhase === 0 && displayedText === '' ? (
            <button
              onClick={handleStart}
              aria-label="Start story"
              className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            >
              Start Story
            </button>
          ) : null}

          <button
            onClick={handleNext}
            disabled={storyPhase === storyContent.length - 1}
            aria-label="Next story phase"
            className={`px-4 py-2 rounded-lg ${storyPhase === storyContent.length - 1
              ? 'bg-gray-100 text-gray-400'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
              } transition-colors`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
});

export default function About() {
  const skills = useMemo(() => [
    { Icon: FaJs, title: "JavaScript" },
    { Icon: SiTypescript, title: "TypeScript" },
    { Icon: FaPython, title: "Python" },
    { Icon: FaDatabase, title: "SQL" },
    { Icon: FaReact, title: "React" },
    { Icon: FaNodeJs, title: "Node.js" },
    { Icon: SiExpress, title: "Express" },
    { Icon: SiDjango, title: "Django" },
    { Icon: SiMongodb, title: "MongoDB" }
  ], []);

  const projects = useMemo(() => [
    {
      title: "iPatrol",
      description: "An application with CRUD functionality designed to streamline patrol management and incident reporting for surf lifesavers.",
      githubLink: "https://github.com/jackson-07/ipatrol",
      liveLink: "https://ipatrol.onrender.com/"
    },
    {
      title: "Invinity",
      description: "An Inventory Management System with CRUD functionality allowing users to create an account, track, search and categorise their inventory.",
      githubLink: "https://github.com/MartyEternal/inventorymanager",
      liveLink: "https://inventorymanager-78zc.onrender.com/"
    },
    {
      title: "Thane",
      description: "A Visual Studio Code extension for developer productivity written in TypeScript and Webpack.",
      githubLink: "https://github.com/jackson-07/thane",
      liveLink: "https://github.com/jackson-07/thane"
    },
    {
      title: "Codle",
      description: "A clone of the online game Wordle using vanilla HTML, CSS and JavaScript and an MVC architecture.",
      githubLink: "https://github.com/jackson-07/codle",
      liveLink: "https://jackson-07.github.io/codle/"
    }
  ], []);

  return (
    <section
      id="about"
      className="bg-white py-16 sm:py-24"
      aria-labelledby="about-section-title"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2
              id="about-section-title"
              className="sr-only"
            >
              About Jackson Raymond
            </h2>
            <p
              className="text-2xl text-gray-700 mb-8 text-center"
              aria-label="About me summary"
            >
              Hello, I'm Jackson, a Technical Recruiter turned Software Engineer with a passion for technology and people.
            </p>
            <MyStory />
          </div>

          <div
            className="flex flex-wrap justify-center gap-8 mb-16"
            role="list"
            aria-label="Technical Skills"
          >
            {skills.map(({ Icon, title }) => (
              <SkillIcon
                key={title}
                Icon={Icon}
                title={title}
              />
            ))}
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            role="list"
            aria-label="Project Showcase"
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                {...project}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}