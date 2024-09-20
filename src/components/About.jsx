import React, { useState } from 'react';
import { FaJs, FaPython, FaDatabase, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiExpress, SiDjango, SiMongodb } from "react-icons/si";
import { FiGlobe } from "react-icons/fi";

const SkillIcon = ({ Icon, title }) => (
  <div className="flex flex-col items-center group">
    <Icon className="w-8 h-8 text-gray-600 group-hover:text-blue-500 transition-colors duration-300" />
    <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{title}</span>
  </div>
);

const ProjectCard = ({ title, description, githubLink, liveLink }) => (
  <div className="bg-gray-100 p-4 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-gray-200 flex flex-col justify-between h-full">
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
    <div className="flex space-x-4 mt-4">
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <FaGithub className="w-6 h-6 text-gray-800 hover:text-blue-600" title="GitHub" />
      </a>
      <a href={liveLink} target="_blank" rel="noopener noreferrer">
        <FiGlobe className="w-6 h-6 text-gray-800 hover:text-blue-600" title="Live Site" />
      </a>
    </div>
  </div>
);

export default function EnhancedAbout() {
  const [showFullStory, setShowFullStory] = useState(false);

  const toggleStory = () => setShowFullStory(!showFullStory);

  return (
    <section id="about" className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
          <div className="mb-8">
            <p className="text-xl text-gray-700 mb-4">
              Hello, I'm Jackson, a Technical Recruiter turned Software Engineer with a passion for technology and people.
            </p>
            <p className="text-gray-600 mb-4">
              {showFullStory ? (
                <>
                  My journey from Technical Recruiting to Software Engineering has been an exciting adventure. As a recruiter, I developed a deep understanding of the tech industry and the skills that make developers stand out. This insight drives my approach to coding, focusing on clean, efficient, and user-centred solutions.
                  <br /><br />
                  The transition hasn't been easy, but my background gives me a unique edge. I understand both the technical and human aspects of software development, which helps me create effective applications.
                </>
              ) : (
                "My unique background in technical recruiting gives me a distinctive perspective on software development.."
              )}
            </p>
            <button
              onClick={toggleStory}
              className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
            >
              {showFullStory ? "Show Less" : "Read More"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h3>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <SkillIcon Icon={FaJs} title="JavaScript" />
            <SkillIcon Icon={FaPython} title="Python" />
            <SkillIcon Icon={FaDatabase} title="SQL" />
            <SkillIcon Icon={FaReact} title="React" />
            <SkillIcon Icon={FaNodeJs} title="Node.js" />
            <SkillIcon Icon={SiExpress} title="Express" />
            <SkillIcon Icon={SiDjango} title="Django" />
            <SkillIcon Icon={SiMongodb} title="MongoDB" />
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="Codle"
              description="A clone of the online game Wordle using vanilla HTML, CSS and JavaScript and an MVC architecture."
              githubLink="https://github.com/jackson-07/codle"
              liveLink="https://jackson-07.github.io/codle/"
            />
            <ProjectCard
              title="Pokédex"
              description="A Pokémon application allowing users to sign in using Google Auth and fetching JSON data from the PokéAPI to create lineups for in-game battle."
              githubLink="https://github.com/jackson-07/pokedex"
              liveLink="https://pokedex-9b5t.onrender.com/"
            />
            <ProjectCard
              title="Invinity"
              description="An Inventory Management System with CRUD functionality allowing users to create an account, track, search and categorise their inventory. "
              githubLink="https://github.com/MartyEternal/inventorymanager"
              liveLink="https://inventorymanager-78zc.onrender.com/"
            />
            <ProjectCard
              title="iPatrol"
              description="An application with CRUD functionality designed to streamline patrol management and incident reporting for surf lifesavers."
              githubLink="https://github.com/jackson-07/ipatrol"
              liveLink="https://ipatrol.onrender.com/"
            />
          </div>
        </div>
      </div>
    </section>
  );
}