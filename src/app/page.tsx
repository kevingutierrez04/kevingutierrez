"use client";

import { experienceData } from '../data/experienceData';
import { ExperienceItem } from '../components/experienceItem';
import { projectData } from '../data/projectData';
import { ProjectItem } from '../components/projectItem';
import { useEffect, useState } from 'react';
import { useRef } from 'react';

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px',  // top margin smaller, bottom margin larger
        threshold: 0.5, }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full h-16 bg-gray-800 flex items-center pl-10 justify-start border-b-1">
        <nav className="flex gap-8 text-white font-medium text-sm">
          {["about", "experience", "projects", "honors"].map((id) => (
            <button
              key={id}
              onClick={() => {
              // 2. Scroll to section
              const section = document.getElementById(id);
              if (section && mainRef.current) {
                mainRef.current.scrollTo({
                  top: section.offsetTop,
                  behavior: "smooth",
                });
              }
            }}
              className={`duration-700 cursor-pointer hover:bg-orange-600 rounded px-2 py-1 transition ${
                activeSection === id ? "border-2 border-orange-400" : ""
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </nav>
      </header>

      {/* Split layout */}
      <div className="flex pt-16 h-full">
        {/* Left fixed panel */}
        <aside className="content-center w-1/2 bg-gray-800 text-white pl-20 p-10 space-y-5 overflow-y-auto">
          <div>
            <h1 className="text-left pb-5 text-3xl font-bold text-orange-400">Kevin Gutierrez</h1>
            <p className="pb-0.5 text-left text-sm">Columbia University Class of 2026</p>
            <p className="pb-0.5 text-left text-sm">Computer Science</p>
            <p className="pb-0.5 text-left text-sm">New York, NY</p>
            <p className="pb-0.5 text-left text-sm">kmg2226@columbia.edu</p>
          </div>
          <a className="bg-orange-400 cursor-pointer mt-4 px-4 py-2 border border-white rounded hover:bg-orange-600 duration-700 transition"
          href="/images/resume.png"
          target="_blank" 
          rel="noopener noreferrer"
          >
            Resume
          </a>

          <div className="h-48"></div>
            <div className="flex gap-2">
              <a href="https://github.com/kevingutierrez04" target="_blank" rel="noopener noreferrer" className="w-[40px] h-[40px] flex items-center justify-center shadow-sm invert">
                <img src="/images/github.png" alt="Github logo"/>
              </a>
              <a href="https://www.linkedin.com/in/kevin-gutierrez-garcia/" target="_blank" rel="noopener noreferrer" className="w-[40px] h-[40px] justify-center shadow-sm invert">
                <img src="/images/linkedin.webp" alt="Linkedin logo"/>
              </a>
            </div>
        </aside>

        {/* Right panel */}
        <main ref = {mainRef} className="bg-gray-800 w-1/2 h-full overflow-y-scroll p-10 space-y-5 text-white">
          <section id="about">
            <h2 className="text-orange-400 text-center text-2xl font-bold mb-2 pt-20 -mt-20">About</h2>
            <div className="space-y-3">
              <p>
              I’m a senior at Columbia University studying Computer Science with a minor in Economics. 
              I have tangential interests in business, marketing, and startups.
              </p>
              <p>
              This summer, I interned as a Software Development Engineer at Amazon Web Services on the
              AI Platforms team. In my time, I designed and implemented the infrastructure for a log
              sharing service to be used by SageMaker AI Partner Apps. Before my internship, ML modeling
              and Governance vendors such as Deepchecks, Fiddler, and Lakera Guard had no automated method to
              independently debug customer production workloads.
              </p>
              <p>
              In my free time, I’m usually running, reading, or climbing. I’ve also been an avid skier my whole life.
              </p>
            </div>
          </section>

          <section id="experience">
            <h2 className="pb-5 text-orange-400 text-center text-2xl font-bold mb-2 pt-20 -mt-20">Experience</h2>
            <div className="space-y-6">
              {experienceData.map((item, index) => (
                <ExperienceItem key={index} {...item} />
              ))}
            </div>
          </section>

          <section id="projects">
            <h2 className="pb-5 text-orange-400 text-center text-2xl font-bold mb-2 pt-20 -mt-20">Selected Projects</h2>
            <div className="space-y-6">
              {projectData.map((item, index) => (
                <ProjectItem key={index} {...item} />
              ))}
            </div>
          </section>

          <section id="honors">
            <h2 className="min-h-[300px] pb-5 text-orange-400 text-center text-2xl font-bold mb-2 pt-20 -mt-20">Honors</h2>
            <p>Aliquam at nunc vel ligula faucibus fermentum. Sed blandit quis lorem nec hendrerit...</p>
          </section>
        </main>
      </div>
    </div>
  );
}
